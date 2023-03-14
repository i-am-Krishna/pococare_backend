const UserModel = require("../Model/user");

const authorisation = (permittedrole) => {
    return async (req, res, next) => 
    {
    const email = req.body.email;
    const user = await UserModel.findOne({email});
    const role = user.role;
        if(permittedrole.includes(role)){
            next();
        }
        else{
            res.send("Not authorised");
        }
    }
}

module.exports = authorisation;