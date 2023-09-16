const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types; //get user id from db

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "No photo",
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
