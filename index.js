const express = require("express");
const connection = require("./config/connection");
const flightRouter = require("./Router/flight");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/flight", flightRouter);
app.listen(port, () => {
  connection();
  console.log("start server");
});
