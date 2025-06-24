const mongoose = require("mongoose");

// const MongoBD_URI = "mongodb+srv://mrchukwusinbox:l1BPRO7z7Vzf8YX8@student-records.hf3ptve.mongodb.net/students";
const MongoBD_URI = process.env.MongoBD_URI;

const connectDB = async() => {
    await mongoose.connect(MongoBD_URI);
}

module.exports = connectDB;

