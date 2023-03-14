const express = require("express");
const authentication = require("../Middlewares/authentication");
const authorisation = require("../Middlewares/authorization");
const dataRouter = express.Router();

dataRouter.get("/cart/edit",authentication,authorisation("seller"),(req,res)=>{
    res.send("Edited successfully by seller...")
});
dataRouter.get("/cart",authentication,authorisation("customer"),(req,res)=>{
    res.send("Cart data for customer...")
});

module.exports = dataRouter;