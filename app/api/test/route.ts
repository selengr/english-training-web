// import type { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
// import { EmailTemplate } from "../../../lib/EmailTemplate";
// import { Resend } from "resend";



// const resend = new Resend(process.env.RESEND_API_KEY);
// console.log('resend :=========>> ', resend.key);

//     export async function POST(req: NextApiRequest, res: NextApiResponse) {
// //   try {
//     const data = await resend.emails.send({
//       from: "reza1997karbakhsh@gmail.com",
//       to: "reza1400karbakhsh@gmail.com",
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }),
//     });

//     return NextResponse.json(data);

// }

export async function POST(req, res) {
  return new Response("ok")
}