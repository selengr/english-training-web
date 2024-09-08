// import { put } from '@vercel/blob'
// import { NextResponse } from 'next/server'

// export const runtime = 'edge'

// export async function POST(req: Request) {
//   if (!process.env.BLOB_READ_WRITE_TOKEN) {
//     return new Response(
//       "Missing BLOB_READ_WRITE_TOKEN. Don't forget to add that to your .env file.",
//       {
//         status: 401
//       }
//     )
//   }

//   const file = req.body || ''
//   const filename = req.headers.get('x-vercel-filename') || 'file.txt'
//   const contentType = req.headers.get('content-type') || 'text/plain'
//   const fileType = `.${contentType.split('/')[1]}`

//   // construct final filename based on content-type if not provided
//   const finalName = filename.includes(fileType)
//     ? filename
//     : `${filename}${fileType}`
//   const blob = await put(finalName, file, {
//     contentType,
//     access: 'public'
//   })

//   return NextResponse.json(blob)
// }





// app/api/upload/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
// import { writeFile } from 'fs/promises'
// import { join } from 'path'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file : any = formData.get('image') as File | null

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  try {
    const image = await prisma.image.create({
      data: {
        filename: file.name,
        mimetype: file?.type,
        data: buffer,
      },
    })

    return NextResponse.json({ id: image.id }, { status: 201 })
  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json({ error: 'Error uploading image' }, { status: 500 })
  }
}