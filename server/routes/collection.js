const express = require("express");
const router = express.Router();
const Collection = require("../database/models/collection");
const passport = require("../passport");

router.post("/add", (req, res, next) => {
  const { name } = req.body;
  Collection.create({
    name,
    user: req.user,
  })
    .then((collections) => {
      res.json({ type: "success", data: { collections } });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/load", (req, res, next) => {
  let user = req.user;
  Collection.find({ user: user })
    .then((collections) => {
      res.json({ type: "success", data: { collections } });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
