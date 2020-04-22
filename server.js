const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("./server/passport");
const app = express();
const path = require('path');

// Route requires
const user = require("./server/routes/user");
const link = require("./server/routes/link");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));
// Sessions
app.use(
  expressSession({
    secret: "secret123",
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use("/user", user);
app.use("/link", link);

app.get('*', function (req, res) {
  res.sendFile('index.html');
});

// Starting Server
app.listen(process.env.PORT || 5000, () => {
  console.log('App listening');
});