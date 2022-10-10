const { Router } = require("express");
const UserModel = require("../Model/Users");
require("dotenv").config();
const checkAuth = require('../middlware/checkauth.js')
const authRouter = Router();

authRouter.post("/signup",checkAuth, async (req, res) => {
  try {
      await UserModel.create({...req.body})
     res.send({ msg: "Sign up Success" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(400).send({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send({ msg: "Incorrect password." });
    

   res .send({userId: user._id });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});

module.exports = authRouter;
