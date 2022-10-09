const mongoose = require('mongoose');
require('dotenv').config();
const mongodb_url = process.env.MONGODB_URL;

//  const db = 'mongodb+srv://Akashpatel:Akash@2211@cluster0.wujpf2o.mongodb.net/blogapp?retryWrites=true&w=majority'
const connection = async() =>{

   return new Promise((resolve,reject)=>{
    mongoose.connect(mongodb_url).then(()=>{
        console.log('connected')
        resolve()
    }).catch((err)=>{
        console.log(err)
        reject()
    })
   })



}

module.exports = connection;