const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const collectionSchema = new Schema(
  {
    name: { type: String, unique: false, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const CollectionSchema = mongoose.model("Collection", collectionSchema);
module.exports = CollectionSchema;
