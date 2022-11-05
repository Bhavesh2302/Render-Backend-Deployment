
const {Router} =require("express")
const bcrypt = require('bcryptjs');
require("dotenv").config()
const jwt = require('jsonwebtoken');
const { UserModel } = require("../models/signup.model");




const loginController = Router()


loginController.post("/",async (req,res)=>{

    const {email,password} =req.body
    // console.log(req.body)

    const user = await UserModel.findOne({email})
    // console.log(user)
    const hash = user.password

    // console.log(hash)

    bcrypt.compare(password, hash, function(err, result) {
        // res === true
        if(err){
            res.status(401).send({"msg":"something went wrong"})
        }
        if(result){
            const token = jwt.sign({ userId :user._id }, "secret");
            // console.log(token)
            console.log(user)
            res.send({"msg":"login successfull" ,"token":token ,"user":user})
        }
        else{
            res.status(401).send({"msg":"something went wrong"})
        }
    });

})

module.exports = {loginController}
