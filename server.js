const express = require("express")
const connect = require("./database/connect");
require("dotenv").config();



const app = express();

const PORT = 8080


//database
connect(process.env.MONGO_URI)


app.listen(PORT,()=>{
    console.log(`server is running on port ${8080}`)
})