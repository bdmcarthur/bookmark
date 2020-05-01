const express = require("express");
const router = express.Router();
const Post = require("../database/models/post");
const passport = require("../passport");

router.post("/add", (req, res, next) => {
  const { link, name, description, board } = req.body;
  Post.create({
    link,
    name,
    description,
    board,
    user: req.user,
  })
    .then((post) => {
      res.json({ type: "success", data: { post } });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/load", (req, res, next) => {
  let user = req.user;
  let board = req.body.board;
  console.log("hereh", board);
  Post.find({ board: board })
    .then((post) => {
      res.json({ type: "success", data: { post } });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
