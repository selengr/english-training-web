import dbConnect from "@/lib/dbConnect";
import LoginedInUsers from "@/models/auth/LoginedInUsers";
import Login from "@/models/auth/LoginedInUsers";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
const nodemailer = require("nodemailer");


export async function GET(request,res) {
  
  try {
        dbConnect();
    const user = await LoginedInUsers.find();
        return new Response(`Welcome to my Next application, user: ${user}`);
    } catch (error) {
        console.error(error);
        return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
        // return new NextResponse.json("myData");
    }
}


export async function POST(request , res ) {
  dbConnect();
      try {
          const requestData = await request.json();

            // Check if user is already registered
        const userExists = await User.findOne({email: requestData.email });
// console.log('userExists :>> ', userExists);
        const crypto = require('crypto');
        const jwtSecret = crypto.randomBytes(32).toString('hex');
         const token = jwt.sign({ id: requestData.password, username: requestData.email },
                 //  process.env.JWT_SECRET
                 jwtSecret
                 );
       
        if (userExists) {
            // console.log('requestData :>> ', requestData);
           if (requestData.password === userExists.password) {
                
                 console.log('userExists._id thhhhhhhhhhhhhhhhhhhhhis  is a test just :>> ', userExists);
          
                 const user = new LoginedInUsers({
                   userId : userExists._id,
                   token : token,
                 })

                 await user.save()
                 .then(res=> new Response(`Welcome to my Next application, user 200 201 202: ${res}`))
                  .catch(err => new Response(`kolan error baba bekhyal 404 403 402: ${err}`))
        
               
              
                 if(!userExists.isActive){

                    //   const LoginedIn = await LoginedInUsers.findOne({token: token });
                    //   const userId = await User.findOne({_id: LoginedIn._id });


                    var transporter = nodemailer.createTransport({
                        host: "sandbox.smtp.mailtrap.io",
                        port: 2525,
                        auth: {
                        user: "a9eb2eb9b8b158",
                        pass: "222739fffe31e8"
                        }
                    });

                        const code = userExists.confirmCode
                        const info = await transporter.sendMail({
                        from: 'reza1997karbakhsh@gmail.com', // sender address
                        to: userExists.email, // list of receivers
                        subject: "Hello ✔", // Subject line
                        // text: userExists.confirmCode, // plain text body
                        html: `<h1>${code}</h1>`, // html body
                        })


                    return new Response(JSON.stringify({ token , username : userExists.username, status : 302 }), { status: 302 });




                    //  return new Response(redirect("/auth/verify"))
                 }else {
                    return new Response(JSON.stringify({ token , username : userExists.username }), { status: 200 });
                 }  
                 
                 
                }
               
           
              
        }else {
            return new Response('please first of all look for sign up', { status: 200 });
        }
  
          
  
      } catch (error) {
          console.error(error);
          return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
      }
  }
