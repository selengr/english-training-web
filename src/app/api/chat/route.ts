import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export const runtime = 'edge';

// Simple in-memory store for rate limiting
// Note: This will reset on server restart. For production, use a persistent store.
const ipRequests = new Map<string, { count: number; lastReset: number }>();

const RATE_LIMIT = 5; // Number of requests allowed per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const userRequests = ipRequests.get(ip) || { count: 0, lastReset: now };

  if (now - userRequests.lastReset > RATE_LIMIT_WINDOW) {
    userRequests.count = 1;
    userRequests.lastReset = now;
  } else if (userRequests.count < RATE_LIMIT) {
    userRequests.count++;
  } else {
    return false;
  }

  ipRequests.set(ip, userRequests);
  return true;
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { 
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again later.',
      }, 
      { status: 429 }
    );
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: messages.map((message: any) => ({
        content: message.content,
        role: message.role,
      })),
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            const content = chunk.choices[0]?.delta?.content || '';
            controller.enqueue(encoder.encode(content));
          }
        } catch (error) {
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    console.error('Error in chat API:', error);

    if (error.message.includes('429') || error.message.includes('exceeded your current quota')) {
      return NextResponse.json(
        { 
          error: 'Service temporarily unavailable',
          message: 'We are currently experiencing high demand. Please try again later.',
        }, 
        { status: 503 }
      );
    }

    return NextResponse.json(
      { 
        error: 'An error occurred', 
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }, 
      { status: 500 }
    );
  }
}