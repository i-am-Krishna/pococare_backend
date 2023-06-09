const UserModel = require("../Model/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()
 

const signup = async(req,res,next)=>{
    let {name,email,password,role} = req.body;
    let existingUser;
    try{
        existingUser = await UserModel.findOne({email});

    }catch(err){
        console.log(err)
    }
    if(existingUser){
        return res.status(400).json({message:"User Already Exists"})
    }
    const hashPassword = await bcrypt.hash(password,10);
    const newUser = new UserModel({
        name,email,password:hashPassword,role
    });
    try{
        await newUser.save()
     }
    catch(err){
        console.log(err)
    }
   return res.status(201).json(newUser)
}


const login= async(req,res,next)=>{
    let {email,password} = req.body;
    let existingUser;
    try{
        existingUser = await UserModel.findOne({email});
    }
    catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({message:"User Not Exists"})
    }
    const correctPassword = await bcrypt.compare(password,existingUser.password);
    if(!correctPassword){
        return res.status(400).json({message:"Incorrect Password"});
    }
    const token = jwt.sign({email:existingUser.email,password:existingUser.password},process.env.ACCESS_TOKEN_PRIVATE_KEY,{
        expiresIn:"7d"
    })
    return res.status(200).json({message:"Login Successful",user:existingUser,token})
}

module.exports = {signup,login};