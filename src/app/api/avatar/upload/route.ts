
// import { put } from '@vercel/blob';
// import { NextResponse } from 'next/server';
 
// export async function POST(request: Request): Promise<NextResponse> {
//   const { searchParams } = new URL(request.url);
//   const filename = searchParams.get('filename');
 
//   const blob = await put(filename as string, request.body as any, {
//     access: 'public',
//   });
 
//   return NextResponse.json(blob);
// }



import { join } from "path";
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from "next/server";



export async function POST(req :NextRequest, res:Response) {
  const data2 = await req.formData()
  const profile2: File | null = data2.get('profile') as unknown as File
  console.log('profile2--------- :>req> ', data2);
  console.log('profile2--------- :>req> ',profile2);
  try {

    
    const data = await req.formData()
        const profile: File | null = data.get('profile') as unknown as File
        let profile_path=''

        const bytes = await profile.arrayBuffer()
        const buffer = Buffer.from(bytes)
        profile_path = join('./public/upload',"/",uuidv4())
        profile_path+='.'+profile.name.split(".")[1]
        await writeFile(profile_path,buffer)

        return new Response(JSON.stringify(profile_path))

  } catch (error) {
      return new Response(`Error retrieving notes: ${error}`, { status: 500 });
  }
}
