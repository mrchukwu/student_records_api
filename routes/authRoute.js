const express = require("express");
const authRouter = express.Router();
const {signupController, loginController} = require("../controller/authController");


authRouter.post("/signup", signupController);
authRouter.post("/login", loginController )

  module.exports = authRouter;