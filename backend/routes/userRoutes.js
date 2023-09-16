const express = require("express");
const {
  userSignUpController,
  userSignInController,
} = require("../controllers/userController");

const router = express.Router(); //router object

// for user routers
//sign up user
router.post("/sign-up", userSignUpController);
//sign in user
router.post("/sign-in", userSignInController);

module.exports = router;
