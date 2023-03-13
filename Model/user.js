const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    role:{
        type:String,
        required:true,
        erum:["customer","seller"],
        default:"customer"
    }
})
const UserModel = mongoose.model("user",userSchema);
module.exports = UserModel;