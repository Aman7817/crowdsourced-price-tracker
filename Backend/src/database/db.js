// import mongoose from "mongoose";

// import { DB_NAME } from "../constant.js";

// const connectDB = async() => {
//     try {
//         console.log("mondodb Url" ,process.env.MONGODB_URI);
//         const connectionInstance = await mongoose.connect(
//             `${process.env.MONGODB_URI}/${DB_NAME}`
//         )
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

        
//     } catch (error) {
//         console.log("MongoDB connection failed",error);
//         process.exit(1);
//     }
// };

// export default connectDB;

import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if(isConnected) return;

    const mongoUri = process.env.MONGODB_URI;

    const db = await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 5000
    });

    isConnected = db.connections[0].readyState === 1;
    
}