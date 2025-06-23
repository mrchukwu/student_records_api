
const Student = require("../model/student");

const allStudentsController = async(req, res) => {
    try{

        const loggedInUser = req.user;
        if(!loggedInUser){
            throw new Error("Student not loggedin");
        }

        const page = parseInt(req.query.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit

        const totalStudents = await Student.countDocuments();
        const allStundents = await Student.find({}).skip(skip).limit(limit);
        console.log(allStundents)

        res.status(200).json({
            status: "success",
            message: "All registered students",
            count: allStundents.length,
            data : allStundents
        })
    }catch(err){
        res.status(401).json({
             status: "failed",
             message: err.message || "Students not found"
        })
    }
}

 const studentController = async(req, res) => {
    try{
            const student = req.user;
            if(!student){
                throw new Error("Invalid request");
            }
            console.log(student);
            res.send({
                status: "success",
                message: "student data",
                data: student
            })
    }catch(err){
            res.status(404).json({message: "err: " + err.message});
    }
 }

module.exports = {
    allStudentsController,
    studentController
}