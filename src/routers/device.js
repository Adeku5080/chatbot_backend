const express = require("express");
const { createDevice } = require("../controllers/device");

const deviceRouter = express.Router();

deviceRouter.route("/").post(createDevice);

module.exports = deviceRouter;
