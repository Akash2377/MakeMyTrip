const express = require("express");
const connection = require("./config/connection");
const flightRouter = require("./Router/flight");
const app = express();

app.use(express.json());

app.use("/flight", flightRouter);

app.listen(8080, () => {
  connection();
  console.log("start server");
});
