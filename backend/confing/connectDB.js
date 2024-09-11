import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URI=process.env.URI

const connectDB=async ()=>{
    try {
        await mongoose.connect(URI,{

        })
console.log("database connected")
    } catch (err) {
        console.error(err)
    }
}


 

export default connectDB;