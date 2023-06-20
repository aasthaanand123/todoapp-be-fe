const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const controller = require("./controller/todoController");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get("/items", controller.getItems);
app.post("/item", controller.postItem);
mongoose
  .connect("mongodb://127.0.0.1:27017/todoDBreact")
  .then(() =>
    app.listen(5454, console.log(`server is started at http://localhost:5454`))
  );
