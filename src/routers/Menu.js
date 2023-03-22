const express = require("express");
const menuRouter = express.Router();
const {createItem,getAllItems,getItem,deleteItem,updateItem} = require("../controllers/menu")

menuRouter.route("/").get(getAllItems).post(createItem);

module.exports = menuRouter;
