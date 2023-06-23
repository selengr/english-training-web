// import type { NextApiRequest, NextApiResponse } from "next";
// import { WaitlistEmail } from "../../../components/email/waitlist";
// import { resend } from "../../../lib/resend";

// const send = async (req: NextApiRequest, res: NextApiResponse) => {debugger
//   const { method } = req;

//   switch (method) {
//     case "GET": {
//       const data = await resend.sendEmail({
//         from: "bu@resend.dev",
//         to: "delivered@resend.dev",
//         subject: "Waitlist",
//         react: WaitlistEmail({ name: "Bu" }),
//       });

//       return res.status(200).send(data);
//     }
//     default:
//       res.setHeader("Allow", ["GET"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// };




// export default send;

/************************************************************************ */
// import type { NextApiRequest, NextApiResponse } from "next";
// import { WaitlistEmail } from "../../../components/email/waitlist";
// import { resend } from "../../../lib/resend";

// import { NextResponse } from 'next/server'
 

// export async function GET(request: Request) {

//     const data = await resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: 'reza1997karbakhsh@gmail.com',
//         subject: 'Hello World',
//         html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
//       });
// debugger
//     return new Response("data", {
//       status: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       },
//     })
//   }

// import type { NextApiRequest, NextApiResponse } from "next";
// import { WaitlistEmail } from "../../../components/email/waitlist";
// // import { resend } from "../../../lib/resend";
// import nodemailer from "nodemailer"

// import { NextResponse } from 'next/server'
 

// const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: 'reza1997karbakhsh@gmail.com',
//       pass: '$$3080267044Mm'
//     },
//     secure: true,
//   });
  
// export async function POST(req:any, res:any) {

//     const { name, email, message } = req.body;

//   const mailOptions = {
//     from: 'reza1997karbakhsh@gmail.com',
//     to: `${email}`,
//     subject: `New message from ${name} (${email})`,
//     text: message,
//     html: `<p>${message}</p>`
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error sending email' });
//   }
//   }