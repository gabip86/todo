import express, { Express } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth";
import usersRoute from "./routes/users";
import todosRoute from "./routes/todos";
import config from "./config/config";

const app: Express = express();
const port: string = config.PORT || "8800";

const connect = async (): Promise<void> => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(config.MONGO, {
      autoIndex: true,
      autoCreate: true,
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/todos", todosRoute);

app.listen(port, () => {
  connect();
  console.log(`App is listening on port ${port}...`);
});
