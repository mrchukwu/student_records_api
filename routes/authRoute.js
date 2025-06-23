const express = require("express");
const authRouter = express.Router();
const {authController} = require("../controller/authController");


authRouter.post("/signup", authController);

  module.exports = authRouter;