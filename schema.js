import mongoose from "mongoose";

const postschema=new mongoose.Schema({
    postMessage:{
        type:String,
        require:true
    },

    postname:{
        type:String,
        require:true
    }
})

export default mongoose.model("post",postschema)