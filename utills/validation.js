const validator = require("validator");
const bcrypt = require("bcrypt");

const validateStudentSignupData = (req) => {
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

const validateStundentLoginData = (req) => {
  const { email, password } = req.body;

  if (!email) {
    throw new Error("Invalid credential");
  } else if (!password) {
    throw new Error("Invalid credential");
  }
};

const validateStudentEditData = (req) => {
  const allowedEditFields = ["firstname", "lastname", "age", "status"];
  const { firstname, lastname, age, status} = req.body; 


  const isEditAllowed = Object.keys(req.body).every(field =>
    allowedEditFields.includes(field)
  );
  if(!isEditAllowed){
    throw new Error("Request contains invalid fields");
  }

  if (firstname !== undefined && typeof firstname !== "string") {
    throw new Error("Firstname is not valid");
  }

  if (lastname !== undefined && typeof lastname !== "string") {
    throw new Error("Lastname is not valid");
  }

  // if (password !== undefined && !validator.isStrongPassword(password)) {
  //   throw new Error("Password is not strong. Must contain uppercase, lowercase, number, and be at least 5 characters long");
  // }

  if (age !== undefined && isNaN(age)) {
    throw new Error("Invalid age");
  }

  if (
    status !== undefined &&
    (typeof status !== "string" || !["present", "absent", "suspended", "expelled"].includes(status.toLowerCase()))
  ) {
    throw new Error("Invalid status value. Allowed: present, absent, suspended, expelled");
  }

  return true;
};

const validateStudentUpdatePassword = (req) => {

  const {oldPassword, newPassword} = req.body;

  if(!oldPassword || !newPassword ){
    throw new Error("Invalid credentials")
  }

  if (!validator.isStrongPassword(newPassword)) {
    throw new Error("New password is not strong enough. Use a strong password with 1 Uppercase letters, lowercase letters, symbols, numbers, etc.");
  }

}

module.exports = {
  validateStudentSignupData,
  validateStundentLoginData,
  validateStudentEditData,
  validateStudentUpdatePassword
};
