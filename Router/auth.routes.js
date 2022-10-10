const { Router } = require("express");
const UserModel = require("../Model/Users");
require("dotenv").config();
const checkAuth = require('../middlware/checkauth.js')
const authRouter = Router();
const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");

authRouter.post("/signup",checkAuth, async (req, res) => {
  try {
     let data = await UserModel.create({...req.body})
     res.send({ msg: "Sign up Success",userId : data._id });
  } catch (err) {
    return res.status(500).send({ msg: err.message});
  }
});


authRouter.get('/:id',async(req,res)=>{

  const{id} = req.params;
   let data = await UserModel.findOne({_id : mongoose.Types.ObjectId(id)})
  res.send(data);
})
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(400).send({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send({ msg: "Incorrect password." });
    

   res .send({userId: user._id ,msg : "login success"});
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});

module.exports = authRouter;
