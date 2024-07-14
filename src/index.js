// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"


dotenv.config({
    path: './env'
})


connectDB()


/*
//one way to connect the Database using ifee


import express from "express";
const app = express()

// function connectDB(){}
// connectDB()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:", error)
        throw err
    }
})()
*/