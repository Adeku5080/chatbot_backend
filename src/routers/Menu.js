const express = require("express");
const menuRouter = express.Router();
const {createItem,getAllItems,getItem,deleteItem,updateItem} = require("../controllers/menu")

menuRouter.route("/").get(getAllItems).post(createItem);
menuRouter.route("/:id").get(getItem).patch(updateItem).delete(deleteItem);

module.exports = menuRouter;
