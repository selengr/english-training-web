'use server'


import { z } from 'zod'
import prisma from '../src/lib/prisma'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';
import { authOption } from '@/lib/next-auth';



// Define a schema for input validation
const BlogPostSchema = z.object({
  title: z.string().min(4, "Title is required").max(20, "Title must be 20 characters or less"),
  body: z.string().min(20, "Body is required").max(150, "Title must be 150 characters or less"),
  content: z.string().min(1, "Content is required"),
})


export async function createBlogAction(data: {
  title: string
  body: string
  content: string
}) {
  
    // Check for session and admin role
    const session = await getServerSession(authOption);

    // if (session.user.role !== 'admin') {
    //   return { error: 'Admin access required.' }
    // }

    if (!session) {
      return { error: 'Authentication required.' }
    }

  // Validate the input data
  const validationResult = BlogPostSchema.safeParse(data)
 
  if (!validationResult.success) {
    return { error: validationResult.error.errors.map((e : any) => e.message).join(', ') }
  }

  const { title, body, content } = validationResult.data

  try {
    const post = await prisma.post.create({
      data: {
        title: title,
        body: body,
        content: content,
        // slug: generateSlug(data.title),
        banner : "17d82226-72fd-4f2f-a340-ab7ce8fb070b.avif"
      }
    })

    
    if (!post) {
      return { error: 'Failed to create the blog.' }
    }

  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: 'That post already exists.' }
    }

    return { error: error.message || 'Failed to create the blog.' }
  }

  redirect(`/blog`)
}

