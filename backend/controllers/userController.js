const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");

// sign up
const userSignUpController = async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;
    // validation;
    if (!name || !userName || !email || !password) {
      return res.status(422).send({
        success: false,
        message: "please fill the all feild",
      });
    }
    // existingUser with two feild with $or operator
    const isUser = await userModel.findOne({
      $or: [
        {
          email: email,
        },
        { userName: userName },
      ],
    });
    if (isUser) {
      return res.status(422).send({
        success: false,
        message: "user already exist",
      });
    }
    //hashpassword
    const hashedpassword = await bcrypt.hash(password, 12);

    //user
    const user = new userModel({
      name,
      userName,
      email,
      password: hashedpassword,
    });
    await user.save();
    console.log("user created");
    return res.status(201).send({
      success: true,
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

//sign in
const userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(422).send({
        message: "fill valid email and password",
        success: false,
      });
    }
    //check email \\it is return a user data
    const user = await userModel.findOne({ email }); // here may be i can wrong
    if (!user) {
      return res.status(422).send({
        message: "please fill the valid email",
        success: false,
      });
    }
    //password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(422).send({
        message: "invalid password",
        success: false,
      });
    }

    return res.status(200).send({
      message: "login successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userSignUpController, userSignInController };
