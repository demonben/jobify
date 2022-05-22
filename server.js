import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
// db and authenticateUser
import connectDB from "./db/connect.js";
// routers
import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";
// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome on server");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobsRoutes);

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
