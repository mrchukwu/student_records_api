const bcrypt = require("bcrypt");
const Student = require("../model/student");
const {
  validateStudentEditData,
  validateStudentUpdatePassword,
} = require("../utills/validation");


const studentsController = async (req, res) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser) {
      throw new Error("Student not loggedin");
    }

    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const students = await Student.find({}).skip(skip).limit(limit);

    const totalStudents = await Student.countDocuments();
    const presentCount =
      (await Student.countDocuments({ status: "present" })) || 0;
    const absentCount = await Student.countDocuments({ status: "absent" });
    const suspendedCount = await Student.countDocuments({
      status: "suspended",
    });
    const expelledCount = await Student.countDocuments({ status: "expelled" });

    res.status(200).json({
      status: "success",
      message: "All registered students",
      pagination: {
        currentPage: page,
        pageSize: limit,
        totalPages: Math.ceil(totalStudents / limit),
      },
      counts: {
        total: totalStudents,
        present: presentCount,
        absent: absentCount,
        suspended: suspendedCount,
        expelled: expelledCount,
      },
      data: students,
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: err.message || "Students not found",
    });
  }
};

const studentsCountController = async(req, res) => {
  try{
    const loggedInUser = req.user;
  if (!loggedInUser) {
    throw new Error("Student not loggedin");
  }
  const students = await Student.find({});

  console.log(students);
  res.status(200).json({
    status: "success",
    message: "Student count",
    data: students.length
  })

  }catch(err){
    res.status(401).json({
      status: "failed",
      message: err.message || "Students not found",
    });
  }
}

const studentController = async (req, res) => {
  try {
    const student = req.user;
    if (!student) {
      throw new Error("Invalid request");
    }
    console.log(student);
    res.status(200).json({
      status: "success",
      message: "student data",
      data: student,
    });
  } catch (err) {
    res.status(404).json({ message: "err: " + err.message });
  }
};

const studentUpdateController = async (req, res) => {
  try {
    validateStudentEditData(req);

    const loggedinUser = req.user;
    console.log(loggedinUser);

    Object.keys(req.body).forEach((key) => (loggedinUser[key] = req.body[key]));

    await loggedinUser.save();

    res.status(200).json({
      status: "success",
      message: `${loggedinUser.firstname} profile updated sucessfully`,
      data: loggedinUser,
    });
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

const studentUpdatePasswordController = async (req, res) => {
  try {
    validateStudentUpdatePassword(req);

    const { oldPassword, newPassword } = req.body;
    const loggedInStudent = req.user;
    console.log(loggedInStudent);

    if (!loggedInStudent.password) {
      throw new Error("Password not found");
    }

    const passwordIsAMatch = await bcrypt.compare(
      oldPassword,
      loggedInStudent.password,
    );
    if (!passwordIsAMatch) {
      throw new Error("Password incorrect");
    }

    const hashNewPassword = await bcrypt.hash(newPassword, 10);

    loggedInStudent.password = hashNewPassword;
    await loggedInStudent.save();

    res.status(200).json({
      status: "success",
      message: `${loggedInStudent.firstname} updated password successfully`,
      data: loggedInStudent,
    });
  } catch (err) {
    res.status(404).json({ message: "ERROR: " + err.message });
  }
};

const studentDeleteController = async (req, res) => {
  try {
    const loggedInStudent = req.user;
    console.log(loggedInStudent);

    const deletedStudent = await Student.findByIdAndDelete(loggedInStudent._id)
    console.log("deleted student ", deletedStudent);
    if(!deletedStudent){
      return res.status(404).json({
        status: "failed",
        message: "Student not found",
      });
    } 
    res.status(204).json({
      status: "success",
      message: "Student deleted successfully",
      data: `${deletedStudent.firstname}'s account is deleted`,
    });

  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "Error deleting student: " + err.message,
    });
  }
};

module.exports = {
  studentsController,
  studentsCountController,
  studentController,
  studentUpdateController,
  studentUpdatePasswordController,
  studentDeleteController,
};

 