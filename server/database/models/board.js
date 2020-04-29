const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const boardSchema = new Schema({
  name: { type: String, unique: false, required: true },
  description: { type: String, unique: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  collections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Collection" }],
});

const BoardSchema = mongoose.model("Board", boardSchema);
module.exports = BoardSchema;
