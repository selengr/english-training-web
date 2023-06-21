import dbConnect from "@/lib/dbConnect";
import Login from "@/models/auth/Login";
import Register from "@/models/auth/Register";
import jwt from "jsonwebtoken";



export async function GET(request,res) {
  
  
  try {
        dbConnect();
    const user = await Register.find();
        return new Response(`Welcome to my Next application, user: ${user}`);

    } catch (error) {
        console.error(error);
        return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
        // return new NextResponse.json("myData");
    }
}



export async function POST(request , res ) {
        console.log('process.env.JWT_SECRET --------------------------11111111111:>> ', process.env.JWT_SECRET);
    dbConnect();
      try {
          const requestData = await request.json();

            // Check if user is already registered
        const userExists = await Login.findOne({ email: requestData.email });
        if (userExists) {
            const crypto = require('crypto');
const jwtSecret = crypto.randomBytes(32).toString('hex');
// cJWT_SECRET= jwtSecret
console.log('jwtSecret ==========9:>> ', jwtSecret);

              const token = jwt.sign({ id: requestData.password, username: requestData.email },
                //  process.env.JWT_SECRET
                 jwtSecret
                 );
              return new Response(JSON.stringify({ token }), { status: 200 });
        }else {
            return new Response('please first of all look for sign up', { status: 200 });
        }
  
          
  
      } catch (error) {
          console.error(error);
          return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
      }
  }
