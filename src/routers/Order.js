const express = require("express");
const orderRouter = express.Router();
const { createOrder, getAllOrders } = require("../controllers/order");

orderRouter.route("/").post(createOrder).get(getAllOrders);
// orderRouter.route("/:id").get(getOrder);

module.exports = orderRouter;
