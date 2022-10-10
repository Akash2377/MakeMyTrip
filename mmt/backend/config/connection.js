const mongoose = require('mongoose');
require('dotenv').config();
// const mongodb_url = process.env.MONGODB_URL;
const mongodb_url = "mongodb+srv://manoranjansethi97:Yh0xVyKumb9CjL73@cluster0.icyzirl.mongodb.net/mmt?retryWrites=true&w=majority"
const connection = async() =>{

   return new Promise((resolve,reject)=>{
    mongoose.connect("mongodb://127.0.0.1:27017/makemytrip").then(()=>{
        console.log('connected')
        resolve()
    }).catch((err)=>{
        console.log(err)
        reject()
    })
   })



}

module.exports = connection;