const bcrypt = require("bcrypt");
const Student = require("../model/student");
const {validateStudentData} = require("../utills/validation");

const authController = async(req, res) => {
    try{

      validateStudentData(req);
      const {firstname, lastname, email, password, age} = req.body;

      const existingStudent = await Student.findOne({email});

      if(existingStudent){
        throw new Error("Email already exist, use another email or Login");
      }
    
      const passwordHashed = await bcrypt.hash(password, 10);

      const student = new Student({
        firstname, lastname, email, password : passwordHashed, age
      })

      await student.save()
  
      res.status(200).json({
        status: "success",
        message: "Student created",
        "student-data" : student
      })
    }catch(err){
      res.status(401).json({
        status: "failed",
        message: "erorr: " + err.message
      })
    }
  }


  module.exports = {
    authController
  }