const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types; //get user id from db

const postSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    postedBy: {
      type: ObjectId, // id
      ref: "USERS", //
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("POSTS", postSchema);

module.exports = postModel;
