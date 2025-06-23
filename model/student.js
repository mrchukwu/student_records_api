
const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 50,
            trim: true
        },

        lastname:{
            type: String,
            required: true,
            minLength: 3,
            maxLength: 50,
            trim: true
        },

        age: {
            type: Number,
            required: true
        },

        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
            trim: true,
            validator(value){
                if(validator.isEmail(value)){
                    throw new Error("Invalid email address " + value);
                }
            }
        },

        password:{
            type: String,
            minLength: 4,
            required: [true, "Password is required"],
            validator(value){
                if(!validator.isStrongPassword(value)){
                    throw new Error("please enter a strong password")
                }
            }
        }
    }
)

const studentModel = mongoose.model("Student", studentSchema);
module.exports = studentModel;