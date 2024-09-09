import prisma from '@/lib/prisma'
import { authOption } from '@/lib/next-auth';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOption);

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { expertise, job, instagramId } = await request.json()

    if (!expertise && !job && !instagramId ) {
      return NextResponse.json({ message: 'New image URL is required' }, { status: 400 })
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user?.email as string },
      data: {
        job, 
        expertise, 
        instagramId 
      }
    })

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    revalidatePath("/")
    return NextResponse.json({ message: 'User profile updated successfully', user: updatedUser }, { status: 200 })
  } catch (error) {
    console.error('Error updating user profile:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
 
}