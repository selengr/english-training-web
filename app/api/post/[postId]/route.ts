import dbConnect from "@/lib/dbConnect";
import Post from "@/models/create/Post";
import { NextApiRequest, NextApiResponse } from "next";

export const dynamic = 'force-dynamic' 

export async function GET(req:NextApiRequest, { params }: { params: { postId: string } }) {

    try {
        dbConnect();
          const posts = await Post.findOne({_id : params.postId});
          return new Response(JSON.stringify(posts));
      } catch (error) {
          console.error(error);
          return new Response(`Error retrieving notes: ${error}`, { status: 500 });
          // return new NextResponse.json("myData");
      }
    return new Response("ok")
  }



