import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async()=>{
    try {
        console.log("conectando db...");
        await mongoose.connect(config.mongo.url);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error.message);
    }
}