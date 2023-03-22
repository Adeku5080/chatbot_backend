const express = require("express");
const orderRouter = express.Router();
const { createOrder } = require("../controllers/order");

orderRouter.route("/").post(createOrder)

module.exports = orderRouter;
