const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const linkSchema = new Schema({
  link: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  board: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
  type: { type: String, required: true }
});

const Link = mongoose.model("Link", linkSchema);
module.exports = Link;
