import express from "express";
import connection from "./configs/index.js";

const app = express();
app.use(express.json());

app.listen(8080, async () => {
  try {
    await connection;
    console.log("listening on port 8080");
  } catch (error) {
    console.log(error);
  }
});
