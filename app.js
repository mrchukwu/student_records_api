const express = require("express");
const connectDB = require("./config/database");
const Student =  require("./model/student");


const app = express();
app.use(express.json());

app.use("/test", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.post("/signup", async(req, res) => {
  try{

    console.log(req.body)
    const {firstname, lastname, email, password, age} = req.body;
    const student = new Student({
      firstname, lastname, email, password, age
    })

    res.status(200).json({
      status: "success",
      message: "Student created",
      student
    })
  }catch(err){
    res.status(401).json({
      status: "failed",
      message: "erorr: " + err.message
    })
  }
})


app.listen(3001, () => {
  console.log("server running on port 3001")
})