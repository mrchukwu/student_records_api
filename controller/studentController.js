
const Student = require("../model/student");

const allStudentsController = async(req, res) => {
    try{

        const loggedInUser = req.user;
        if(!loggedInUser){
            throw new Error("Student not loggedin");
        }

        const allStundents = await Student.find({});
        console.log(allStundents)

        res.status(200).json({
            status: "success",
            message: "All registered students",
            count: allStundents.length,
            students: allStundents
        })
    }catch(err){
        res.status(401).json({
             status: "failed",
             message: err.message || "Students not found"
        })
    }
}

 

module.exports = {
    allStudentsController
}