const mongoose = require('mongoose');

//  const db = 'mongodb+srv://Akashpatel:Akash@2211@cluster0.wujpf2o.mongodb.net/blogapp?retryWrites=true&w=majority'
const connection = async() =>{

   return new Promise((resolve,reject)=>{
    mongoose.connect('mongodb://127.0.0.1:27017/makemytrip').then(()=>{
        console.log('connected')
        resolve()
    }).catch((err)=>{
        console.log(err)
        reject()
    })
   })



}

module.exports = connection;