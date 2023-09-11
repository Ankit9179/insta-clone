const userModel = require("../models/userModel.js");
// sign up
const userSignUpController = async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;
    //user
    const user = new userModel({ name, userName, email, password });
    await user.save();
    console.log("user created");
    return res.status(201).send({
      success: true,
      message: "user created",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userSignUpController };
