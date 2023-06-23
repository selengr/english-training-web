import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import LoginedInUsers from "@/models/auth/LoginedInUsers";
// import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from 'next/navigation'
// const nodemailer = require("nodemailer");
// "use strict";

export async function GET(request, response ) {

  const LoginedIn = await LoginedInUsers.findOne();
  const userExists = await User.findOne();
  return new Response(`${userExists} ====================  ${LoginedIn}`, { status: 200 });
}

export async function POST(request, response ) {
  dbConnect();

  const requestData = await request.json();
  console.log("1111111111111111111111");
  
      try {
       
          const LoginedIn = await LoginedInUsers.findOne({token: requestData.token });
          console.log('LoginedIn :>> ', LoginedIn);
          const userExists = await User.findOne({_id: LoginedIn.userId });
          console.log('userExists :>> ', userExists);
        
          console.log('request.url========= =======================:>> ', requestData.code , userExists.confirmCode);
       
        if (userExists) {
           if (requestData.code === userExists.confirmCode) {  
                 userExists.isActive = true;
                 return new Response(`welcom ${userExists}`, { status: 200 });
            }

        }else {
            return new Response('code invalid', { status: 200 });
        }
            // return new Response(`code:  ${userExists.confirmCode}z ` , { status: 200 });
            return new Response(`code:  ok ok ` , { status: 200 });
  
      } catch (error) {
          console.error(error);
          return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
      }
  }

// "use strict";
// const nodemailer = require("nodemailer");

// export async function GET(request , res ) {

// var transporter = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "a9eb2eb9b8b158",
//       pass: "222739fffe31e8"
//     }
//     // host: 'smtp.gmail.com',
//     // port: 465,
//     // secure: true, // true for 465, false for other ports
//     // auth: {
//     //     user: 'reza1997karbakhsh@gmail.com', // your email address
//     //     pass: 'ynpolqkcjxbqxose' // your email password or app password if you have 2FA enabled
//     // }
//   });

//   console.log("22222222");
//   const info = await transporter.sendMail({
//     from: 'reza1997karbakhsh@gmail.com', // sender address
//     to: "ahad.mirhabibi@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "tetetetetst", // plain text body
//     html: 4444, // html body
//   });
//   console.log('info :>> ', info);
//           return new Response(`Error retrieving notes:`, { status: 201 });

//   }
