import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app: Express = express();
const port: number = 8800;

dotenv.config();

const connect = async (): Promise<void> => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO || '');
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
  connect();
  console.log(`App is listening on port ${port}...`);
});
