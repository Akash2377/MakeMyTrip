const express = require('express');
const connection = require('../config/connection');
const flightRouter = require('../Router/flight');
const authRouter = require("./Router/auth.routes");
require("dotenv").config();


const app = express();

app.use(express.json());

app.use('/flight',flightRouter);
app.use("/auth", authRouter);



app.listen(process.env.PORT,()=>{
    connection();
    console.log("start server");
})