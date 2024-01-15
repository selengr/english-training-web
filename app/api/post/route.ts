// https://reactapp.ir/eact-file-upload-proper-server-side-nodejs-easy/

import { join } from "path";
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises'
import dbConnect from '@/lib/dbConnect';
import Post from "@/models/create/Post";
import { NextRequest, NextResponse } from "next/server";


export const dynamic = 'force-dynamic'

export async function GET(req:NextRequest) {
  try {
        // dbConnect();
        // const posts : any = await Post.find();
        // return new Response(JSON.stringify(posts))
        return new Response("teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

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
      
      let exam : any = data.get("saveExample")
      let table : any = data.get("tableData")
      let info : any = data.get("information")
      info = JSON.parse(info)
      exam = JSON.parse(exam)
      table = JSON.parse(table)
      console.log('info :>> ', info);
console.log('table :>> ', table);
console.log('exam :>> ', exam);
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
        information : info,
        saveExample: exam,
        tableData: table,
        descriptionLink:data.get("descriptionLink"),
        link:data.get("link"),

      })
      await create.save()
      return new Response(JSON.stringify(create))


  } catch (error) {
      return new Response(`Error retrieving notes: ${error}`, { status: 500 });
  }
}



export async function PUT(req:NextRequest, res:NextResponse) {
  return new Response("ok")
}

export async function DELETE(req:NextRequest, res:NextResponse) {
  return new Response("ok")
}


// export async function POST(req:NextApiRequest, res:NextApiResponse) {
//   return new Response(req)
// }


