import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

const app = express();
configDotenv();

app.use(cors());
app.use(express.json());



import connectDB from "./Config/databaseConnection.js";
import userRouter from "./Routes/formRoutes.js"
import './Config/Passport.js'

// Adds headers: Access-Control-Allow-Origin: *
const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

app.get("/test", cors(corsOptions), (req, res) => {
  res.send("Server working");
});

connectDB();


app.use("/", userRouter);

app.listen("3000", () => {
  console.log("server is starting on port no. 3000");
});
