const express = require("express");
const { createPostController } = require("../controllers/postControllers");
const requireLogin = require("../middlewares/requireLogin"); //for check login or not

const router = express.Router(); //router object

//for post routers
//create post
router.post("/create-new-post", requireLogin, createPostController);

module.exports = router;
