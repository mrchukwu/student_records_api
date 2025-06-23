const validator = require("validator");

const validateStudentData = async(req) => {
    const {firstname, lastname, email, password, age} = req.body;

    if(!firstname || !lastname){
        throw new Error("Invalid name input");
    }else if(!validator.isEmail){
        throw new Error("email not valid");
    }else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong password")
    }else if(!age){
        throw new Error("Age is not valid")
    }
}


module.exports = {
    validateStudentData
}