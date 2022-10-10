const express = require("express");
const connection = require("./config/connection");
const flightRouter = require("./Router/flight");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/flight", flightRouter);
app.listen(8080, () => {
  connection();
  console.log("start server");
});
