import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";




export async function GET(request,res) {
  
  dbConnect();
  
  try {
        dbConnect();
    const user = await User.find();
        return new Response(`Welcome to my Next application, user: ${user}`);

    } catch (error) {
        console.error(error);
        return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
        // return new NextResponse.json("myData");
    }
}



export async function POST(request ,  ) {

const num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
         console.log('num.toString()================== :>> ', num.toString());
    dbConnect();
      try {
        
          const requestData = await request.json();
          const user = new User({
            username : requestData.username,
            email : requestData.email,
            password : requestData.password,
            confirmCode : num.toString(),
            isActive : false,
          })
         await user.save()
      
              .then(res=> {
                console.log('num.toString()================== :>> ', num.toString());
                console.log('num.toString()================== :>> ', typeof num.toString())
              })
               .catch(err => new Response(`kolan error baba bekhyal 404 403 402: ${err}`))
           
              //  if (res.statusCode === 200) {
                // redirect("/auth/login");
              // } else {
                return new Response(`Welcome ${requestData.username} to my web ${user}`, { status: 200 });
              // }
  
      } catch (error) {
          console.error(error);
          return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
      }
  }
