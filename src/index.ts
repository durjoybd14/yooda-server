// import required packages
import cors from "cors";
import env from "dotenv";
import express from "express";
import mongoose from "mongoose";
// imports routesHandler
import newFoodHandler from "./routesHandler/newFoodHandler";
import newStudentHandler from "./routesHandler/newStudentHandler";
import rootHandler from "./routesHandler/rootHandler";
import serveHandler from "./routesHandler/serveHandler";

// server port
const port = process.env.PORT || 5000;

// app initialization
env.config();
const app = express();
app.use(express.json());
app.use(cors());

// database connection with mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ghclx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database successfully connected!"))
  .catch((err: mongoose.CallbackError) => console.log("Database error", err));

// all routes
app.use("/", rootHandler);
app.use("/", newFoodHandler);
app.use("/", newStudentHandler);
app.use("/", serveHandler);

// listen app
app.listen(port, () => {
  console.log("I am running Boss!");
});
