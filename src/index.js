// require("dotenv").config();
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
 
dotenv.config({
    path: "./.env"
});

import connectDB from "./db/index.js";      // 2nd method of connecting to DB using a separate file for connection logic

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err)
})



/*
import express from "express";
const app = express();

( async() => {          // 1st method of connecting to DB directly in the index file
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/$
            {DB_NAME}`)
            app.on("error",(error)=>{
                console.log("ERROR: ", error);
                throw error
            })

            app.listen(process.env.PORT,()=>{
                console.log(`Server is running on port ${process.env.PORT}`);
            })

    } catch(error){
        console.error("Error connecting to MongoDB:", error);
        throw err
    }
})()

*/