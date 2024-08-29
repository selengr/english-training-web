'use server'


import { z } from 'zod'
import prisma from '../src/lib/prisma'
import { redirect } from 'next/navigation'



// Define a schema for input validation
const BlogPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be 100 characters or less"),
  body: z.string().min(1, "Body is required"),
  content: z.string().min(1, "Content is required"),
})


export async function createBlogAction(data: {
  title: string
  body: string
  content: string
}) {
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

