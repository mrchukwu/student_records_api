const express = require("express");
const connectDB = require("./config/database");

const app = express();

app.use("/test", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

connectDB().then(() => {
  console.log("Database conection established...");
  app.listen(3001, () => {
    console.log("Server running on port 3001")
  })
})
.catch((err) => {
    console.error("Database cannot be connected!!")
});
