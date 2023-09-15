//create post
const createPostController = (req, res) => {
  console.log("hello this is createPostController");
  return res.json("hello controller");
};

module.exports = { createPostController };
