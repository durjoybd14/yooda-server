import { model, Schema } from "mongoose";

const serveSchema = new Schema({
  roll: String,
  date: String,
  shift: String,
  status: String,
  foodItems: String,
});

const Serve = model("Serve", serveSchema);

export default Serve;
