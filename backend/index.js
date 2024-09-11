import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./confing/connectDB.js";
import bookRoute from './router/router.js'
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api",bookRoute)
const PORT=process.env.PORT||4000;
app.get("/",(req,res)=>{
    res.send("hlommmooo")
})

const start=async()=>{
    try{
        app.listen(PORT,()=>{
                connectDB()
            console.log(`runninnng at port ${PORT}`)
        })
    }
    catch(err){
        console.error(err)
    }
}



start()