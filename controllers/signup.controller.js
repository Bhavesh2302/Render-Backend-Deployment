const { Router } = require("express");
const bcrypt = require("bcryptjs");
const { UserModel } = require("../models/signup.model");
const signupController = Router();

signupController.post("/", (req, res) => {
  const { name, email, password } = req.body;
  // console.log("req",req.body)

  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      // console.log(err)
      res.status(500).send({ msg: "something went wrong" });
    }
    try {
      const user = new UserModel({ name, email, password: hash });
      console.log(user);
      await user.save();
      res.status(201).send({ msg: "Signup Sucessfull" });
    } catch (error) {
      res.status(500).send({ msg: "something went wrong" });
    }
  });
});

module.exports = {
  signupController,
};
