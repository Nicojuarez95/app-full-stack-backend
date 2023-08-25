import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    publication:{
        type: String,
        required: true
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps:true
 })

export default mongoose.model("Comment", commentSchema)