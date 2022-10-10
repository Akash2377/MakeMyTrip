const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
//  const db = 'mongodb+srv://Akashpatel:Akash@2211@cluster0.wujpf2o.mongodb.net/blogapp?retryWrites=true&w=majority'
const connection = async () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        `mongodb+srv://${username}:${password}@cluster0.wujpf2o.mongodb.net/blogapp?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("connected");
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};

module.exports = connection;
