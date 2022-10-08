const { Router } = require("express");
const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "The email already exists." });

    const passwordHash = await bcrypt.hash(password);
    const newUser = new UserModel({
      username: username,
      email: email,
      password: passwordHash,
    });
    await newUser.save();
    res.json({ msg: "Sign up Success" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });

    // if login success create token
    const payload = { id: user._id, name: user.username };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    res.send({ token, userId: user._id });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = authRouter;
