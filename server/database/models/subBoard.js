const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const subBoardSchema = new Schema({
  name: { type: String, unique: false, required: true },
  description: { type: String, unique: false },
  board: { type: mongoose.Schema.Types.ObjectId, ref: "Board" }
});

const SubBoardSchema = mongoose.model("SubBoard", subBoardSchema);
module.exports = SubBoardSchema;
