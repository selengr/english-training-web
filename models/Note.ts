import mongoose from "mongoose"


// console.log("111===>",111)
const NoteModel = new mongoose.Schema({
    username : {type:String,require:true},
    email : {type:String,require:true},
    password : {type:String,require:true},
    confirmPassword : {type:String,require:true},
    },
    { timestamps: true } 
)



export default mongoose.models.Note || mongoose.model("Note", NoteModel)
