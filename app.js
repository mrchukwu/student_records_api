const express = require("express");
const connectDB = require("./config/database");
const {validateStudentData} = require("./utills/validation");

const app = express();
app.use(express.json());

const authRouter = require("./routes/authRoute");

app.use("/", authRouter)


connectDB()
.then(() => {
  console.log("Database connection established...");
  app.listen(3001, () => {
    console.log("server running on port 3001")
  })
}).catch(err => {
  console.log("Database connection falied: " + err.message);
})

