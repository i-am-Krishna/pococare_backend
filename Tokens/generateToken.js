const jwt = require("jsonwebtoken");
const generateToken= async (user)=>{
    try {
        const payload = {_id:userRouter._id,roles:userRouter.roles};
        const accessToken = jwt.sign(payload,process.env.ACCESS_TOKEN_PRIVATE_KEY,{
            expiresIn:"7d"
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = generateToken;