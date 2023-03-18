const express = require("express");
const { chatbot } = require("../controllers/chatbot");

const chatBotRouter = express.Router();

chatBotRouter.route("/").get().post(chatbot);


module.exports = chatBotRouter;
