import mongoose from "mongoose"


const UserModel = new mongoose.Schema({
    username : {type:String,require:false},
    email : {type:String,require:true},
    password : {type:String,require:true},
    isActive : { type:Boolean},
    code : { type:Boolean},
    },
    { timestamps: true } 
)



export default mongoose.models.User || mongoose.model("User", UserModel)
