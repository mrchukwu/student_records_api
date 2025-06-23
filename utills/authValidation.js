const validator = require("validator");
const bcrypt = require("bcrypt");

const validateStudentSignupData = async (req) => {
  const { firstname, lastname, email, password, age } = req.body;

  if (!firstname || !lastname) {
    throw new Error("Invalid name input");
  } else if (!validator.isEmail) {
    throw new Error("email not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  } else if (!age) {
    throw new Error("Age is not valid");
  }
};

const validateStundentLoginData = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new Error("Invalid credential");
  } else if (!password) {
    throw new Error("Invalid credential");
  }
};

// const validatePassword = async function(passwordInputByStudent){

//         const stundent = this;
//         const passwordHashed =  stundent.password;
//         const isPasswordValid = bcrypt.compare(passwordInputByStudent, passwordHashed);

//         return isPasswordValid;

// }

module.exports = {
  validateStudentSignupData,
  validateStundentLoginData
};
