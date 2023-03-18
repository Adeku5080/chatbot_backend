const Menu = require("../model/Menu");

const createItem = async (req, res) => {
  try{
    const item = await Menu.create(req.body)
    res.status(200).json({item})
  }catch(err){
    console.log(err)
  }
};

const getAllItems = async (req, res) => {
  try{
    const items = await Menu.find({})
     res.status(200).json({items})
  }catch(err){
    console.log(err)
  }
};

const getItem = async (req, res) => {
  res.send("hello");
};

const deleteItem = async (req, res) => {
  res.send("hello");
};

const updateItem = async (req, res) => {
  res.send("hello");
};

module.exports = {
  createItem,
  getAllItems,
  getItem,
  deleteItem,
  updateItem,
};
