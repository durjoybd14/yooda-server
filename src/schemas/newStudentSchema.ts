import { model, Schema } from "mongoose";

const newStudentSchema = new Schema({
  fullName: String,
  roll: String,
  age: String,
  class: String,
  hallName: String,
  status: String,
  shift: String,
});

const NewStudent = model("NewStudent", newStudentSchema);

export default NewStudent;
