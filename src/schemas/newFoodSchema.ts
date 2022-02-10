import { model, Schema } from "mongoose";

const newFoodSchema = new Schema({
  name: String,
  price: String,
});

const NewFood = model("NewFood", newFoodSchema);

export default NewFood;
