import dbConnect from "@/lib/dbConnect";
import LoginedInUsers from "@/models/auth/LoginedInUsers";
import Login from "@/models/auth/LoginedInUsers";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from 'next/navigation'


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

        const userExists = await User.findOne({token: requestData.token });

       
       
        if (userExists) {
           if (requestData.code === userExists.code) {  
              
                 if(!userExists.isActive){
                     return new Response( redirect('/'))
                 }

            }

        }else {
            return new Response('code invalid', { status: 200 });
        }
  
          
  
      } catch (error) {
          console.error(error);
          return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
      }
  }
