
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import Post from "@/models/create/Post";
const fs = require('fs')
import type { NextApiRequest, NextApiResponse } from "next";




export async function GET(req:NextApiRequest, res:NextApiResponse) {
  dbConnect();
  
  try {
        dbConnect();
        const user = await User.find();
        return new Response(`Welcome to my Next application, user: ${user}`);

    } catch (error) {
        console.error(error);
        return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
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


export async function POST(req: Request, res:NextApiResponse) {
    dbConnect();

    const imagePath = "/path/to/image.jpg";
    const imageBuffer = fs.readFileSync(imagePath);
  
    try {
    let data = await req.json()
    const post = new Post({
      title: data?.title,
      introduction: data?.introduction,
      information: {
        author: data?.information?.author,
        publicationDate: data?.information?.publicationDate,
        source: data?.information?.source,
        content: data?.information?.content,
      },
      body: data?.body,
      point: data?.point,
      tips: data?.tips,
      mainIdea: data?.mainIdea,
      extraInformation: data?.extraInformation,
      cultureNotes: data?.cultureNotes,
      outline: data?.outline,
      tags: data?.tags,
      conclusion: data?.conclusion,
      callToAction: data?.callToAction,
      slug: data?.slug,
      likes: data?.likes,
      views: data?.views,
      status: data?.status,
      excerpt: data?.excerpt,
      featuredImage: data?.featuredImage,
      categories: data?.categories,
      lastUpdateDate: new Date(),
      creation: new Date(),
      comments: [],
      metadata: data?.metadata,
      languageLevel: data?.languageLevel,
      learningObjective: data?.learningObjective,
      vocabularyFocus: data?.vocabularyFocus,
    });
    
    const savedPost = await post.save();
    console.log(savedPost);
        return new Response(`Welcome to my Next application, user: ${savedPost}`);

    } catch (error) {
        console.error(error);
        return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
        // return new NextResponse.json("myData");
    }
}


export async function PUT(req:NextApiRequest, res:NextApiResponse) {
  return new Response("ok")
}

export async function DELETE(req:NextApiRequest, res:NextApiResponse) {
  return new Response("ok")
}