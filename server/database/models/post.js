const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const postSchema = new Schema({
  link: { type: String, required: true, unique: false },
  name: { type: String, required: true },
  description: { type: String, required: false },
  board: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
