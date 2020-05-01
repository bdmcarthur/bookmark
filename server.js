const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const colors = require("colors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");
const flash = require("connect-flash");
const user = require("./routes/userRoutes");
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
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use("/user", user);
app.use("/post", post);
app.use("/board", board);
app.use("/collection", collection);

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-auth-simple",
  { useNewUrlParser: true },
  function (err) {
    if (err) throw err;
    console.log(`mongoose connection successful`.yellow);
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`connected on port ${PORT}`.cyan);
    });
  }
);
