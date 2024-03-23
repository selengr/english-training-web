// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '@/lib/dbConnect';
import Test from '@/models/Test';
import Post from '@/models/create/Post';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server';

type Data = {
  name: string
}




// export async function GET(req:NextRequest) {
//   try {
//      await dbConnect();
//      const posts : any = await Test.find();
//      return new Response(JSON.stringify(posts))
//     } catch (error) {
//         return new Response(`Error retrieving notes: ${error}`, { status: 500 });
//     }
// }




// export async function POST(req :NextRequest, res:Response) {
//   try {
//     await dbConnect()
//       const create = new Test({
//         name: "im am reza",
//       })
//       console.log('create :>> ', create);
//       await create.save()
//       return new Response(JSON.stringify(create))


//   } catch (error) {
//       return new Response(`Error retrieving notes: ${error}`, { status: 500 });
//   }
// }





// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

