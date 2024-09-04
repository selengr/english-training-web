'use server'


import { StringValidation, z } from 'zod'
import prisma from '../src/lib/prisma'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';
import { authOption } from '@/lib/next-auth';



// Define a schema for input validation
const BlogPostSchema = z.object({
  title: z.string().min(4, "Title must be 4 characters or more").max(50, "Title must be 20 characters or less"),
  body: z.string().min(40, "Description must be 40 characters or more").max(150, "description must be 150 characters or less"),
  content: z.string().min(1, "Content is required"),
  slug: z.string().min(1, "slug is required"),
  banner: z.string().min(1, "banner is required"),
})

export async function createBlogAction(data: {
  title: string
  body: string
  content: string
  slug: string
  banner: string
}) {
  
    // Check for session and admin role
    const session = await getServerSession(authOption);
    
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user.email as string,
      },
    });

    if (user?.role !== 'ADMIN') {
      return { error: 'Admin access required.' }
    }
    
    if (!session) {
      return { error: 'Authentication required.' }
    }
    
    // Validate the input data
    const validationResult = BlogPostSchema.safeParse(data)
 
  if (!validationResult.success) {
    return { error: validationResult.error.errors.map((e : any) => e.message).join(', ') }
  }

  let post
  const { title, body, content, slug, banner } = validationResult.data

  try {
     post = await prisma.post.create({
      data: {
        title: title,
        body: body,
        content: content,
        slug: slug,
        banner : banner,
        published: false,
        authorId: user?.id as string,
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

  redirect(`/blog/${post?.id}`)
}



// ------------------------------------------------ update

// Define a schema for input validation
const UpdateBlogPostSchema = z.object({
  id: z.string().uuid("Invalid post ID"),
  title: z.string().min(4, "Title must be 4 characters or more").max(50, "Title must be 20 characters or less"),
  body: z.string().min(40, "Description must be 40 characters or more").max(150, "description must be 150 characters or less"),
  content: z.string().min(1, "Content is required"),
  slug: z.string().min(1, "slug is required"),
  banner: z.string().min(1, "banner is required"),
})

export async function updateBlogAction(data: {
  id: string
  title: string
  body: string
  content: string
  slug: string
  banner: string
}) {
  
    // Check for session and admin role
    const session = await getServerSession(authOption);


    const user = await prisma.user.findUnique({
      where: {
        email: session?.user.email as string,
      },
    });
    if (user?.role !== 'ADMIN') {
      return { error: 'Admin access required.' }
    }
    if (!session) {
      return { error: 'Authentication required.' }
    }
    
    // Validate the input data
    const validationResult = UpdateBlogPostSchema.safeParse(data)
 
  if (!validationResult.success) {
    return { error: validationResult.error.errors.map((e : any) => e.message).join(', ') }
  }

  let post
  const { title, body, content, slug, banner, id } = validationResult.data
  try {
    // Update the post
    const updatedPost = await prisma.post.update({
      where: { id: id },
        data: {
          title: title,
          body: body,
          content: content,
          slug: slug,
          banner : banner,
          published: false,
          authorId: user?.id as string,
        }
    })

    if (!updatedPost) {
      return { error: 'Failed to update the blog post.' }
    }

  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: 'A post with this title already exists.' }
    }

    return { error: error.message || 'Failed to update the blog post.' }
  }

  redirect(`/blog/${id}`) // Redirect to the updated post
}