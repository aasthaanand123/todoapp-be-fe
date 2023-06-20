// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  body: String,
});
module.exports = mongoose.model("todo", todoSchema);
