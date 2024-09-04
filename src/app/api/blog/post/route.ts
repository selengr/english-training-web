import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth';
import { authOption } from '@/lib/next-auth';
import { NextRequest, NextResponse } from 'next/server'



export async function GET(request: NextRequest) {
    
    try {
        const session = await getServerSession(authOption)
        
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        }

        const { params } = await request.json()

        console.log('params--------------------------- :>> ', params);
    
        if (!params) {
            return NextResponse.json({ message: 'blog name is required' }, { status: 400 })
        }

        const blog = await prisma.post.findUnique({
        where: {
          id: params.slug as string
        },
      });
    

    if (!blog) {
      return NextResponse.json({ message: 'blog not found' }, { status: 404 })
    }
    
     return NextResponse.json({ blog }, { status: 200 })
    

  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}