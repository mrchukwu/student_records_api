const jwt = require("jsonwebtoken");
const Student = require("../model/student");

const auth = async(req, res, next) => {
    try{
        const {token} = req.cookies;

        if(!token){
            return res.status(401).send("Please login!")
        }

        const decodedObj = await jwt.verify(token, process.env.JWT_SECRET);

        const {_id} = decodedObj

        const user = await Student.findById(_id);

        if(!user){
            throw new Error("Invalid token or student not found");
        }

        req.user = user;
        next();
    }catch(err){
        res.status(400).json({
            status: "failed",
            message: "Unauthorized: " + err.message,
        })
    }
};

module.exports = {auth};