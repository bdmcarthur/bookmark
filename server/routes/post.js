const express = require("express");
const router = express.Router();
const Post = require("../database/models/post");
const passport = require("../passport");


router.post("/add", (req, res, next) => {
  const { link, name, description, board, type } = req.body;
  Post.create({
    post,
    name,
    description,
    board,
    user: req.user,
    type
  })
    .then(listing => {
      res.json({ type: "success", data: { listing } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/load", (req, res, next) => {
  let user = req.user
  Post.find({ user: user })
    .then(listing => {
      res.json({ type: "success", data: { listing } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
