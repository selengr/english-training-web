import dbConnect from "@/lib/dbConnect";
import LoginedInUsers from "@/models/auth/LoginedInUsers";
import { redirect } from 'next/navigation'



export async function POST(request , res ) {
  dbConnect();
      try {
          const requestData = await request.json();
          console.log('requestDatalkk;lk;lkl;k;lklk;lk;lk;lkl;k;lk :>> ', requestData);
          const userExists = await LoginedInUsers.findOne({token: requestData.token });
          console.log('===========userExists :>> ', userExists);
          console.log('requestData.code , userExists.code :>> ', requestData.code , userExists.iso);
       
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
