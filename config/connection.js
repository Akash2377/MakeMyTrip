const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
//  const db = 'mongodb+srv://${AkashSurve}:${AkashSurve}@cluster0.ttsrfa6.mongodb.net/?retryWrites=true&w=majority'
const connection = async () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        `mongodb+srv://${username}:${password}@cluster0.ttsrfa6.mongodb.net/?retryWrites=true&w=majority`
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
