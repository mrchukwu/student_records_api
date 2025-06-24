const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../model/student");
const {
  validateStudentSignupData,
  validateStundentLoginData
} = require("../utills/validation");


const signupController = async (req, res) => {
  try {
    validateStudentSignupData(req);
    const { firstname, lastname, email, password, age } = req.body;

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      throw new Error("Email already exist, use another email or Login");
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const student = new Student({
      firstname,
      lastname,
      email,
      password: passwordHashed,
      age,
    });

    await student.save();

    res.status(200).json({
      status: "success",
      message: "Student created",
      data : student,
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: "erorr: " + err.message,
    });
  }
};

const loginController = async (req, res) => {
  try {
    validateStundentLoginData(req);

    const { email, password } = req.body;

    const student = await Student.findOne({ email: email });
    if (!student) {
      throw new Error("Invalid credential");
    }


    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (isPasswordValid) {
      const token = jwt.sign({ _id: student._id }, "TechyJauntProject$12", {
        expiresIn: "7d",
      });
      res.cookie("token", token, {expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});

      res.status(200).json({
        status: "success",
        message: "Stundent loggedin",
        data : student
      })
    }else{
        res.send("Invalid credential")
    }
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: "error: " + err.message,
    });
  }
};

module.exports = {
  signupController,
  loginController
};
