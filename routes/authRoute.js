const express = require("express");
const router = express.Router();
const {signupController, loginController, logoutController} = require("../controller/authController");


router.post("/signup", signupController);
router.post("/login", loginController );
router.post("/logout", logoutController);

  module.exports = router;