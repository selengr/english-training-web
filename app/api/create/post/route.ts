
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import Post from "@/models/create/Post";
const fs = require('fs')
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




// if (req.files) {
//   const images = {};

//   if (req.files.mainImage) {
//     images.mainImage = `/uploads/${req.files.mainImage.name}`;
//   }

//   if (req.files.additionalImage1) {
//     images.additionalImage1 = `/uploads/${req.files.additionalImage1.name}`;
//   }
//   if (req.files.additionalImage2) {
//     images.additionalImage2 = `/uploads/${req.files.additionalImage2.name}`;
//   }
//   post.images = images;
// }
// await post.save();


export async function POST(req :Request, res:Response) {
  try {
        await dbConnect()
        const data = await req.json()
        const post = new Post(data);
        await post.save();
        return new Response(`Welcome to my Next application, user: ${post}`);


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
