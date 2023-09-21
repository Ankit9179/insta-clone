const express = require("express");
const {
  createPostController,
  getAllPost,
} = require("../controllers/postControllers");
const requireLogin = require("../middlewares/requireLogin"); //for check login or not

const router = express.Router(); //router object

//for post routers
//create post
router.post("/create-new-post", requireLogin, createPostController);
//get all post
router.get("/get-all-posts", requireLogin, getAllPost);

module.exports = router;
