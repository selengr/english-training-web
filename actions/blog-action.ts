'use server'

import prisma from '../src/lib/prisma'
import { redirect } from 'next/navigation'

export async function createBlogAction(data: {
  title: string
  body: string
  content: string
}) {
  // TODO: validate the data

  let post

  try {
    post = await prisma.post.create({
      data: {
        title: data.title,
        body: data?.body,
        content: data.content,
        banner : "17d82226-72fd-4f2f-a340-ab7ce8fb070b.avif"
      }
    })

    if (!post) {
      return { error: 'Failed to create the blog.' }
    }
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: 'That slug already exists.' }
    }

    return { error: error.message || 'Failed to create the blog.' }
  }

  redirect(`/blog/${post.id}`)
}