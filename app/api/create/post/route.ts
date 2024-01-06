// https://reactapp.ir/eact-file-upload-proper-server-side-nodejs-easy/

import Post from "@/models/create/Post";
const fs = require('fs/promises')
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '@/lib/dbConnect';
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises'


const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/reza')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage })

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


export async function POST(req :Request, res:Response) {

try {
  await dbConnect()
   


  
  const data = await req.formData()
      // const file: File | null = data.get('cover') as unknown as File
      const myfile = data.get('cover');

      const upload = multer().single(myfile)
      const bytes = await myfile.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const fileName = uuidv4(); // generate a unique file name
      const fileExtension = myfile.type.split('/')[1];
      let path = '/images/'+fileName+'.'+fileExtension
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)
  

        return new Response(`Welcome to my Next application, user: ${"post"}`);


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


