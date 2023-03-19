const express = require("express");
const { chatbot } = require("../controllers/chatbot");

const chatBotRouter = express.Router();

chatBotRouter.route("/").get(chatbot).post(chatbot);


module.exports = chatBotRouter;
