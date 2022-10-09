const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {type : String, require : true},
    email : {type : String, require : true},
    mobilenumber : {type : Number, require : true},
    password : {type : String, require : true},
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel;

