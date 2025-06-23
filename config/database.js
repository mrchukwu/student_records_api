const mongoose = require("mongoose");

const MongoBDURI = "mongodb+srv://mrchukwusinbox:l1BPRO7z7Vzf8YX8@student-records.hf3ptve.mongodb.net/"

const connectDB = async() => {
    await mongoose.connect(MongoBDURI);
}

module.exports = connectDB;

// l1BPRO7z7Vzf8YX8