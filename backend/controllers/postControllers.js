const postModel = require("../models/postModel");

//create post
const createPostController = (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res
      .status(401)
      .send({ success: false, message: "please fill the all feilds" });
  }
  console.log(req.userData); //user information from req wich is comming throug the requireLogin middleware
  //create a post
  const post = new postModel({
    title,
    body,
    postedBy: req.userData,
  });
  post
    .save()
    .then((result) => {
      return res.json({ post: result });
    })
    .catch((err) => console.log(err));
};

module.exports = { createPostController };
