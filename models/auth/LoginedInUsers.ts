import mongoose from "mongoose"



const LoggedInUsersModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      token : String,   
}, 
{ timestamps: true })




export default mongoose.models.LoggedInUsers || mongoose.model("LoggedInUsers", LoggedInUsersModel)
