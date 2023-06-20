import dbConnect from "@/lib/dbConnect";
import Note from "@/models/Note";




export async function GET(request,res) {
  
//   dbConnect();
  
  try {
       await dbConnect();
    //    const user = await Note.find()
    //    const user = await Note.find({ name: "reza" });
    const user = await Note.findOne({ name: 'reza' });
       console.log("GET3---GET3--GET2--GET2--GET2--GET2");

        // if (user.length === 0) {
        //     return new Response("No notes found.");
        // }
        // return new NextResponse.json("myData");
        return new Response(`Welcome to my Next application, user: ${user}`);

    } catch (error) {
        console.error(error);
        return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
        // return new NextResponse.json("myData");
    }
}



export async function POST(request,res) {
    console.log("POST---POST--POST--POST--POST--POST");
    
    dbConnect();
      try {
          const user = new Note({
            name : "reza",
            email : "reza1997karbakhsh@gmail.com",
            password : "123456789",
          })
          user.save()
              .then(res=> new Response(`Welcome to my Next application, user 200 201 202: ${res}`))
               .catch(err => new Response(`kolan error baba bekhyal 404 403 402: ${err}`))
  
          // if (user.length === 0) {
          //     return new Response("No notes found.");
          // }
          // return new NextResponse.json("myData");
          return new Response(`Welcome to my Next application, user: ${user}`);
  
      } catch (error) {
          console.error(error);
          return new Response(`Error retrieving notes: ${error.message}`, { status: 500 });
          // return new NextResponse.json("myData");
      }
  }
  