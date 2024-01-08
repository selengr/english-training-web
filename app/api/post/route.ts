// https://reactapp.ir/eact-file-upload-proper-server-side-nodejs-easy/

import { join } from "path";
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises'
import dbConnect from '@/lib/dbConnect';
import Post from "@/models/create/Post";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { isConstructorDeclaration } from "typescript/lib/tsserverlibrary";




export async function GET(req:NextApiRequest) {
  try {
        dbConnect();
        const posts : any = await Post.find();
        return new Response(JSON.stringify(posts))
    } catch (error) {
        return new Response(`Error retrieving notes: ${error}`, { status: 500 });
    }
}



export async function POST(req :NextRequest, res:Response) {
  try {
    await dbConnect()
    const data = await req.formData()
      const cover: File | null = data.get('cover') as unknown as File
      const banner: File | null = data.get('banner') as unknown as File
      let cover_path=''
      let banner_path=''
      // if(!file) NextResponse.json({success:false})
      if(cover){
        const bytes = await cover.arrayBuffer()
        const buffer = Buffer.from(bytes)
        cover_path = join('./public/upload',"/",uuidv4())
        cover_path+='.'+cover.name.split(".")[1]
        await writeFile(cover_path,buffer)
      }
      if(banner){
        const bytes = await banner.arrayBuffer()
        const buffer = Buffer.from(bytes)
        banner_path = join('./public/upload',"/",uuidv4() )
        banner_path+='.'+banner.name.split(".")[1]
        await writeFile(banner_path,buffer)
      }
      const create = new Post({
        cover:cover_path,
        banner:banner_path,
        title:data.get("title"),
        introduction:data.get("introduction"),
        mainIdea:data.get("mainIdea"),
        body:data.get("body"),
        point:data.get("point"),
        tips:data.get("tips"),
        extraInformation:data.get("extraInformation"),
        conclusion:data.get("conclusion"),
        languageLevel:data.get("languageLevel"),
        tags:data.get("tags"),
        information : {
          author:data.get("information.author"),
          email:data.get("information.email")
        }
      })
      console.log('create :>> ', create);
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


