import prisma from '@/lib/prisma'
import { getServerSession } from '@/lib/auth-session';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email as string,
      }
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }
    
     return NextResponse.json({ user }, { status: 200 })
    

  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}