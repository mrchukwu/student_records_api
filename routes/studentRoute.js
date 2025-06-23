
const express = require("express");
const studentRouter = express.Router();
const {auth} = require("../middleware/auth");
const {allStudentsController} =  require("../controller/studentController")

studentRouter.get("/students", auth,  allStudentsController);

module.exports = studentRouter;
