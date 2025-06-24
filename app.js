const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");

const app = express();
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/authRoute");
const studentRouter = require("./routes/studentRoute");

app.use("/", authRouter);
app.use("/", studentRouter);


connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3001, () => {
      console.log("server running on port 3001");
    });
  })
  .catch((err) => {
    console.log("Database connection falied: " + err.message);
  });
