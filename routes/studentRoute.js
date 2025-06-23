
const express = require("express");
const studentRouter = express.Router();
const {auth} = require("../middleware/auth");
const {allStudentsController, studentController} =  require("../controller/studentController")

studentRouter.get("/students", auth,  allStudentsController);
studentRouter.get("/students/:id", auth, studentController);

module.exports = studentRouter;
