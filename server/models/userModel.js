import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userShema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    firstName:{
        type:String,
        required:false,
    },
    lastName:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:false,
    },
    color:{
        type:Number,
        required:false,
    },
    profileSetup:{
        type:Boolean,
        default:false,
    }
})


userShema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password,10);
    next();
})


const User = mongoose.model("User",userShema);

export default User;