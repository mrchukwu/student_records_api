const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://mrchukwusinbox:jOsLQX0mBf3CQxtx@student-records.6ew33h1.mongodb.net/student_records");
}

module.exports = connectDB;