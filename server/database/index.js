//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();
//your local database url
//27017 is the default mongoDB port
const mongooseConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(process.env.MONGODB_URI, mongooseConnectionOptions).then(
  () => {
    console.log("Connected to Mongo");
  },
  err => {
    /** handle initial connection error */

    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

module.exports = mongoose.connection;