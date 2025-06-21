
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

        age: {
            type: Number,
            required: true
        }
    }
)

const studentModel = mongoose.model("Student", studentSchema);
module.exports = studentModel;