import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
// import LoginedInUsers from "@/models/auth/LoginedInUsers";
import { redirect } from 'next/navigation'



export async function POST(request , res ) {
  dbConnect();
      try {
          const requestData = await request.json();
        //   const LoginedIn = await LoginedInUsers.findOne({token: requestData.token });
          const userExists = await User.findOne({email: requestData.email });
        
       
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
