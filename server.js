const express = require("express");
const morgan = require("morgan");
const menuRouter = require("./src/routers/Menu");
const chatbotRouter = require("./src/routers/chatbot");
const orderRouter = require("./src/routers/Order");
const deviceRouter = require("./src/routers/device");

const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

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
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(
  session({
    name: "chatBot",
    secret: "secret_key",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI, //  this setup a store in your database where sessions will be saved.
      touchAfter: 1 * 3600,
    }),
    cookie: {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      maxAge: 1 * 60 * 60 * 1000,
    },
  })
);

//register routes
app.use("/api/v1/menu", menuRouter);
app.use("/api/v1/chatbot", chatbotRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/device", deviceRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${8080}`);
});
