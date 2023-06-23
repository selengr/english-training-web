import mongoose from "mongoose"


const UserModel = new mongoose.Schema({
    username : {type:String,require:false},
    email : {type:String,require:true},
    password : {type:String,require:true},
    isActive : { type:Boolean},
    confirmCode : {type:String,require:true},
    },
    { timestamps: true } 
)



export default mongoose.models.User || mongoose.model("User", UserModel)
