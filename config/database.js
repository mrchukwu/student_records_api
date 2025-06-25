const mongoose = require("mongoose");

const MongoBD_URI = process.env.MongoBD_URI

const connectDB = async() => {
    await mongoose.connect(MongoBD_URI);
}

module.exports = connectDB;

