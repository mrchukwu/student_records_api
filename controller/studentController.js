const Student = require("../model/student");
const { validateStudentEditData } = require("../utills/validation");

const allStudentsController = async (req, res) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser) {
      throw new Error("Student not loggedin");
    }

    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;

    const students = await Student.find({}).skip(skip).limit(limit);

    const totalStudents = await Student.countDocuments();
    const presentCount = await Student.countDocuments({ status: "present" }) || 0;
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

const studentController = async (req, res) => {
  try {
    const student = req.user;
    if (!student) {
      throw new Error("Invalid request");
    }
    console.log(student);
    res.send({
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

    res.send({
      status: "success",
      message: `${loggedinUser.firstName} profile updated sucessfully`,
      data: loggedinUser,
    });
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

const studentDeleteController = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = {
  allStudentsController,
  studentController,
  studentUpdateController,
};
