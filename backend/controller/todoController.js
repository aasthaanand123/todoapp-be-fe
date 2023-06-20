const todoModel = require("../models/todoModel");
//get items and post items functions
const todosList = ["new", "first task", "second task"];
module.exports.getItems = async (req, res) => {
  try {
    // let todos = await todoModel.find({});
    res.send(todosList);
  } catch (err) {
    res.send(err);
  }
};
module.exports.postItem = async (req, res) => {
  //create the item in db after getting data from request
  try {
    let { title, description } = req.body;
    await todoModel.create({ title: title, body: description });
    //redirect request to get all items
    res.redirect("/items");
  } catch (err) {
    res.send(err);
  }
};
