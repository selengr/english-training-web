import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return new Response(
      "Missing BLOB_READ_WRITE_TOKEN. Don't forget to add that to your .env file.",
      {
        status: 401
      }
    )
  }

  const file = req.body || ''
  const filename = req.headers.get('x-vercel-filename') || 'file.txt'
  const contentType = req.headers.get('content-type') || 'text/plain'
  const fileType = `.${contentType.split('/')[1]}`

  // construct final filename based on content-type if not provided
  const finalName = filename.includes(fileType)
    ? filename
    : `${filename}${fileType}`
  const blob = await put(finalName, file, {
    contentType,
    access: 'public'
  })

  return NextResponse.json(blob)
}





// import { NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'

// export const runtime = 'nodejs' // Changed from 'edge' to 'nodejs' for Prisma compatibility

// const prisma = new PrismaClient()

// export async function POST(req: Request) {
//   const file = await req.blob()
//   const filename = req.headers.get('x-vercel-filename') || 'file.txt'
//   const contentType = req.headers.get('content-type') || 'text/plain'
//   const fileType = `.${contentType.split('/')[1]}`

//   // construct final filename based on content-type if not provided
//   const finalName = filename.includes(fileType)
//     ? filename
//     : `${filename}${fileType}`

//   try {
//     // Here, you would typically save the file to a file system or object storage service
//     // This is a placeholder for where you'd implement your file storage logic
//     const fileUrl = await saveFile(file, finalName)

//     // Store metadata in PostgreSQL using Prisma
//     const image = await prisma.image.create({
//       data: {
//         filename: finalName,
//         contentType: contentType,
//         fileUrl: fileUrl,
//       },
//     })

//     return NextResponse.json(image)
//   } catch (error) {
//     console.error('Error uploading file:', error)
//     return new Response('Error uploading file', { status: 500 })
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// // This function is a placeholder for your actual file saving logic
// async function saveFile(file: Blob, filename: string): Promise<string> {
//   // Implement your file saving logic here
//   // This could involve saving to local filesystem, AWS S3, Google Cloud Storage, etc.
//   // For now, we'll just return a dummy URL
//   return `https://example.com/uploads/${filename}`
// }