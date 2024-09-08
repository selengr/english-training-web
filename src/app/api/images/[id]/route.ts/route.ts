// // app/api/images/[id]/route.ts

// import { NextRequest, NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   const id = params.id

//   try {
//     const image : any = await prisma.image.findUnique({
//       where: { id },
//     })

//     if (!image) {
//       return NextResponse.json({ error: 'Image not found' }, { status: 404 })
//     }

//     return new NextResponse(image?.data, {
//       headers: {
//         'Content-Type': image?.mimetype,
//         'Content-Disposition': `inline; filename="${image.filename}"`,
//       },
//     })
//   } catch (error) {
//     console.error('Error retrieving image:', error)
//     return NextResponse.json({ error: 'Error retrieving image' }, { status: 500 })
//   }
// }




// app/api/images/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
 
  return NextResponse.json({ error: 'Error retrieving image' }, { status: 500 })
  
}