import dbConnect from "@/lib/dbConnect";
import Post from "@/models/create/Post";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

// export const dynamic = 'force-dynamic' 

export async function GET(req:NextRequest, { params }: { params: { postId: string } }) {

    try {
      await dbConnect();
          const post = await Post.findOne({ _id: params.postId });
          if (!post) {
            return new Response('Post not found', { status: 404 });
          }
          return new Response(JSON.stringify(post));
      } catch (error) {
          console.error(error);
          return new Response(`Error retrieving notes: ${error}`, { status: 500 });
      }
  }



