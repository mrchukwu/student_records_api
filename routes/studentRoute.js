
const express = require("express");
const studentRouter = express.Router();
const {auth} = require("../middleware/auth");
const {allStudentsController, studentController, studentUpdateController} =  require("../controller/studentController")

studentRouter.get("/students", auth,  allStudentsController);
studentRouter.get("/students/:id", auth, studentController);
studentRouter.patch("/students/:id", auth, studentUpdateController);

module.exports = studentRouter;
