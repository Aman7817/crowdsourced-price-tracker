import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5174',
    credentials: true
}));

app.use(express.json({limit:"20kb"}));

app.use(express.urlencoded({extended: true,limit:"20kb"}));

app.use(cookieParser());

import userRouter from "./routes/user.routes.js"
import prductRouter from './routes/product.routes.js'
import alertRouter from './routes/alert.routes.js'


app.use("/api/v1/users",userRouter)
app.use("/api/v1/products",prductRouter)
app.use("/api/v1/alerts",alertRouter);

// http://localhost:8000/api/v1/users/register
export {
    app
}