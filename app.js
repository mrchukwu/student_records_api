const express = require("express");
const connectDB = require("./config/database");
const {validateStudentData} = require("./utills/validation");

const app = express();
app.use(express.json());

app.use("/test", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

const authRouter = require("./routes/authRoute");

app.use("/", authRouter)


app.listen(3001, () => {
  console.log("server running on port 3001")
})