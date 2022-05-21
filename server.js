import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.get("/", (req, res) => {
  res.send("Welcome on server");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

const start = async () => {
  try {
   await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
