const userRouter = require("express").Router()
const { signupUser, loginUser } = require("../controllers/userController.js")

userRouter.post("/register", signupUser)
userRouter.post("/login", loginUser)

module.exports = userRouter