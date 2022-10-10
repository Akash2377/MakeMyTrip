const authRouter = require("express").Router()
const passport = require("passport")
require('dotenv').config()

authRouter.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		})
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" })
	}
})

authRouter.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	})
})

authRouter.get("/google", passport.authenticate("google", ["profile", "email"]))

authRouter.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
)

authRouter.get("/logout", (req, res) => {
	req.logout()
	res.redirect(process.env.CLIENT_URL)
})

module.exports = authRouter