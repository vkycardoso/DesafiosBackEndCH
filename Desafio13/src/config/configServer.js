import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(config.mongo.url);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error.message);
    }
}
/*


import mongoose from "mongoose";
const URI = "mongodb+srv://JMMartinez68:mily060601>@cluster0.kcahmxv.mongodb.net/ecommerce?retryWrites=true&w=majority";

export const connectDB = () => {
    try {
        mongoose.connect(URI)
        console.log('connected to DB ecommerce')
    } catch (error) {
        console.log(error);
    }
};

//export default connectDB
*/