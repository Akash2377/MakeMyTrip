const express = require('express')
const cors = require("cors")
const passport = require("passport")
const passportStrategy = require("../passport")
const cookieSession = require("cookie-session")
const connection = require('../config/connection')
const flightRouter = require('../Router/flight')
const authRouter = require('../Router/auth')
const session = require('express-session')

const app = express()
app.use(express.json())

app.use(session({
	secret: 'somethingsecretgoeshere',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
 }))

app.use(passport.initialize())
app.use(passport.session())

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
)



app.use('/flight',flightRouter)
app.use('/auth',authRouter)


app.listen(8080,()=>{
    connection()
    console.log("start server")
})