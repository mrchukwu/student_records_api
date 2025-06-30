
const express = require("express");
const router = express.Router();
const {auth} = require("../middleware/auth");
const {studentsController, studentController, studentUpdateController, studentDeleteController, studentUpdatePasswordController, studentsCountController} =  require("../controller/studentController")

router.get("/students", auth,  studentsController);
router.get("/students/count", auth, studentsCountController);
router.get("/students/:id", auth, studentController);
router.patch("/students/:id", auth, studentUpdateController);
router.patch("/students/:id/resetpassword", auth, studentUpdatePasswordController);
router.delete("/students/:id", auth, studentDeleteController);

module.exports = router;