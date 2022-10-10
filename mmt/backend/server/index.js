const express = require('express');
const connection = require('../config/connection');
const flightRouter = require('../Router/flight');
const authRouter = require("../Router/auth.routes.js");
require("dotenv").config();


const app = express();

app.use(express.json());

app.use('/flight',flightRouter);
app.use("/auth", authRouter);

// process.env.PORT

app.listen(8080,()=>{
    connection();
    console.log("start server");
})