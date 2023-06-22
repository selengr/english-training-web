import dbConnect from "@/lib/dbConnect";
import LoginedInUsers from "@/models/auth/LoginedInUsers";
import Login from "@/models/auth/LoginedInUsers";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";



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
console.log('userExists :>> ', userExists);
        const crypto = require('crypto');
        const jwtSecret = crypto.randomBytes(32).toString('hex');
         const token = jwt.sign({ id: requestData.password, username: requestData.email },
                 //  process.env.JWT_SECRET
                 jwtSecret
                 );
       
        if (userExists) {
            console.log('requestData :>> ', requestData);
           if (requestData.password === userExists.password) {
                
                 
          
                 const user = new LoginedInUsers({
                   UserId : userExists._id,
                   token : token,
                 })

                 await user.save()
                 .then(res=> new Response(`Welcome to my Next application, user 200 201 202: ${res}`))
                  .catch(err => new Response(`kolan error baba bekhyal 404 403 402: ${err}`))
        
               
              
                 if(!userExists.isActive){
                    return new Response(JSON.stringify({ token }), { status: 200 });
                    //  return new Response(redirect("/auth/verify"))
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
