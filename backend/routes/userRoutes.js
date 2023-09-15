const express = require("express");
const {
  userSignUpController,
  userSignInController,
} = require("../controllers/userController");
const { createPostController } = require("../controllers/postControllers");
const requireLogin = require("../middlewares/requireLogin"); //for check login or not

const router = express.Router(); //router object

// for user routers
//sign up user
router.post("/sign-up", userSignUpController);
//sign in user
router.post("/sign-in", userSignInController);

//for post routers
//create post
router.post("/create-post", requireLogin, createPostController);

module.exports = router;
