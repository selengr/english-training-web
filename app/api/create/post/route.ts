// https://reactapp.ir/eact-file-upload-proper-server-side-nodejs-easy/

import { join } from "path";
import { writeFile } from 'fs/promises'
import dbConnect from '@/lib/dbConnect';
import Post from "@/models/create/Post";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";





export async function GET(req:NextApiRequest, res:NextApiResponse) {

  try {

        const posts = await Post.find({});
        return new Response(`Welcome to my Next application ok ok: ${posts}`);

    } catch (error) {
        console.error(error);
        return new Response(`Error retrieving notes: ${error}`, { status: 500 });
        // return new NextResponse.json("myData");
    }
  return new Response("ok")
}


export async function POST(req :NextRequest, res:Response) {
  try {
    await dbConnect()
    const data = await req.formData()
    console.log('data :>> ', data);
      const cover: File | null = data.get('cover') as unknown as File
      const banner: File | null = data.get('banner') as unknown as File
      let cover_path,banner_path
      // if(!file) NextResponse.json({success:false})
      if(cover){
        const bytes = await cover.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const cover_path = join('/images',"/",cover.name )
        await writeFile(cover_path,buffer)
      }
      if(banner){
        const bytes = await banner.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const banner_path = join('/images',"/",banner.name )
        await writeFile(banner_path,buffer)
      }
 
      const create = new Post({
        data,
        cover:cover_path,
        banner:banner_path
      })
      await create.save()

      return new Response("okkkkkkkkkkk")


  } catch (error) {
      return new Response(`Error retrieving notes: ${error}`, { status: 500 });
  }
}



export async function PUT(req:NextApiRequest, res:NextApiResponse) {
  return new Response("ok")
}

export async function DELETE(req:NextApiRequest, res:NextApiResponse) {
  return new Response("ok")
}


// export async function POST(req:NextApiRequest, res:NextApiResponse) {
//   return new Response(req)
// }


