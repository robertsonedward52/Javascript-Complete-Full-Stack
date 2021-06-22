const express = require("express")

const app = express()

// incoming bodies requests & parse application/x-www-form-urlencoded
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// include file router.js 
const router = require("./router")
console.log("I am " + router.age)

const port = 8080


// ejs template engine 
app.set("views", "views")
app.set("view engine", "ejs")

// set file inclues
app.use(express.static("public"))

// include router file
app.use("/", router)

module.exports = app
