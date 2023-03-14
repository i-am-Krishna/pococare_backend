require("dotenv").config();
const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
    const token = req.headers?.authorization;
    try{
        let decoded = jwt.verify(token,process.env.JWT_PASSWORD);
        req.body.email = decoded.email;
        next();
    }
    catch(err){
       res.send("Please login again");
    }
}
module.exports = authentication;