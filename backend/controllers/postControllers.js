const postModel = require("../models/postModel");

//create post
const createPostController = (req, res) => {
  const { url, body } = req.body;
  // console.log(url, body);
  if (!url || !body) {
    return res
      .status(401)
      .send({ success: false, message: "please fill the all feildssss" });
  }
  console.log(req.userData); //user information from req wich is comming throug the requireLogin middleware
  //create a new post
  const post = new postModel({
    url,
    body,
    postedBy: req.userData, //user's  _id
  });
  post
    .save()
    .then((result) => {
      return res.status(201).send({
        success: true,
        message: "post has created successfully",
        result,
      });
    })
    .catch((err) => console.log(err));
};

//get all post
const getAllPost = async (req, res) => {
  postModel
    .find()
    .populate("postedBy", "_id name")
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
};

module.exports = { createPostController, getAllPost };
