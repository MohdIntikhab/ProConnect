import express from "express";
 import cors from "cors";
 import dotenv from "dotenv";
 import mongoose from "mongoose";
 import postsRoutes from "./routes/posts.routes.js"; 
 import userRoutes from "./routes/user.routes.js";
 dotenv.config();

 const app = express();

 
 app.use(cors()); 
 app.use(express.json()); //Always put express.json above the routes
 app.use(postsRoutes); 
 app.use(userRoutes);
 app.use(express.static("uploads"));
// app.use("/uploads", express.static("uploads"));



 const start = async()=>{
  const connectDB = await mongoose.connect(process.env.MONGO_URI);

  app.listen(9080, ()=>{
    console.log("server is running on Port 9080");
  })
 } 
 start();