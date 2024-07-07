import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true,
        unique:true

    },

    password:{
        type:String,
        require:true
    },

    mobile:{
        type:Number,
        require:true
    },

    address:{
        type:String,
        require:true
    },
   
})
const User=mongoose.model("User",userSchema);
export default User;