import mongoose from "mongoose"


const RegisterModel = new mongoose.Schema({
    username : {type:String,require:true},
    email : {type:String,require:true},
    password : {type:String,require:true},
    confirmPassword : {type:String,require:true},
    },
    { timestamps: true } 
)



export default mongoose.models.Register || mongoose.model("Register", RegisterModel)
