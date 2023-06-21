import mongoose from "mongoose"


const LoginModel = new mongoose.Schema({
    email : {type:String,require:true},
    password : {type:String,require:true}
    },
    { timestamps: true } 
)



export default mongoose.models.Login || mongoose.model("Login", LoginModel)
