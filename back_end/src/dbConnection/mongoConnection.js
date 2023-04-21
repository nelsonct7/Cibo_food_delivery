import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connectToDb = async (startServer) => {
  try {
    const connection = await mongoose.connect(config.mongo.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    connection && console.log("Connected to Mongo Db");
    connection && startServer();
  } catch (error) {
    console.log("Monog db connection error...", error);
  }
};
