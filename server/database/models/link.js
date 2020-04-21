const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const linkSchema = new Schema({
  link: { type: String, unique: true, required: true },
  name: { type: String, unique: false, required: true },
  description: { type: String, unique: false, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Link = mongoose.model("Link", linkSchema);
module.exports = Link;
