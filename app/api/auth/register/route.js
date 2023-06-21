import dbConnect from "@/lib/dbConnect";
import Register from "@/models/auth/Register";




export async function GET(request,res) {
  
//   dbConnect();
  
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



export async function POST(request ,  ) {
        
    dbConnect();
      try {
          const requestData = await request.json();
          const user = new Register({
            username : requestData.username,
            email : requestData.email,
            password : requestData.password,
            confirmPassword:  requestData.confirmPassword
          })
         await user.save()
              .then(res=> new Response(`Welcome to my Next application, user 200 201 202: ${res}`))
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
