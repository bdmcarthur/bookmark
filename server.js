const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./server/database");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("./server/passport");
const app = express();
const path = require("path");
require("dotenv").config();
// Route requires
const user = require("./server/routes/user");
const post = require("./server/routes/post");
const board = require("./server/routes/board");
const collection = require("./server/routes/collection");
// MIDDLEWARE
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Sessions
app.use(
  expressSession({
    secret: "secret123",
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60,
    }),
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use("/user", user);
app.use("/post", post);
app.use("/board", board);
app.use("/collection", collection);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("App listening");
});
