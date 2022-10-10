const GoogleStrategy = require("passport-google-oauth20").Strategy
const passport = require("passport")
require('dotenv').config()

passport.use(
	new GoogleStrategy(
		{
			clientID: "423650951374-f5j765g32ogotc28r9bqd5nvbvpketq7.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile)
		}
	)
)

passport.serializeUser((user, done) => {
	done(null, user)
})

passport.deserializeUser((user, done) => {
	done(null, user)
})