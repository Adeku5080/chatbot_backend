const express = require("express");
const morgan = require("morgan");
const menuRouter = require("./src/routers/Menu");
const chatbotRouter = require("./src/routers/chatbot");
const orderRouter = require("./src/routers/Order")
const bodyParser = require("body-parser");
const session = require("express-session");

const cors = require("cors");

const connect = require("./database/connect");
require("dotenv").config();

const app = express();

const PORT = 8080;

//database
connect(process.env.MONGO_URI);

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());
app.use(
  session({
    secret: "secret-key",
    resave:false,
    saveUninitialized:false,
  })
);

//register routes
app.use("/api/v1/menu", menuRouter);
app.use("/api/v1/chatbot", chatbotRouter);
// app.use("/api/v1/order" ,orderRouter)

app.listen(PORT, () => {
  console.log(`server is running on port ${8080}`);
});
