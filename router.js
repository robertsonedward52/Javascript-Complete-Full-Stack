const express = require("express")

const router = express.Router()

// require the userController.js
const userController = require("./controllers/userController")


router.get("/", userController.home)

router.post("/register", userController.register)

module.exports = router