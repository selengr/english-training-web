import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";




export async function GET(request,res) {
  
//   dbConnect();
  
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
        
    dbConnect();
      try {
        let min = 1000;
        let max = 9999;
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
          const requestData = await request.json();
          const user = new User({
            username : requestData.username,
            email : requestData.email,
            password : requestData.password,
            isActive : false,
            code : number
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
