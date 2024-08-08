'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const CreatePostAction = async (formdata: FormData) => {
  try {
    const { title, body, iamge } = Object.fromEntries(formdata);

    const address = String(title).split(' ').join('-');

    const post = await prisma.post.create({
      data: {
        title: title as string,
        address,
        body: body as string,
        image: iamge as string,
      },
    });

    if (!post) return { success: false };

    revalidatePath('/admin');

    return { success: true };
  } catch (error) {
    console.log('CreatePostAction', error);
  }
};

export const DeletePostAction = async (id: number) => {
  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });

    revalidatePath('/admin');
  } catch (error) {
    console.log('DeletePostAction', error);
  }
};