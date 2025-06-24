
const express = require("express");
const studentRouter = express.Router();
const {auth} = require("../middleware/auth");
const {allStudentsController, studentController, studentUpdateController, studentDeleteController, studentUpdatePasswordController} =  require("../controller/studentController")

studentRouter.get("/students", auth,  allStudentsController);
studentRouter.get("/students/:id", auth, studentController);
studentRouter.patch("/students/:id", auth, studentUpdateController);
studentRouter.patch("/students/:id/password", auth, studentUpdatePasswordController);
studentRouter.delete("/students/:id", auth, studentDeleteController);

module.exports = studentRouter;
