const express = require("express");
const { userSignUpController } = require("../controllers/userController");

const router = express.Router(); //router object

//sign up user
router.post("/sign-up", userSignUpController);

module.exports = router;
