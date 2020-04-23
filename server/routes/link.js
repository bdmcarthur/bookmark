const express = require("express");
const router = express.Router();
const Link = require("../database/models/link");
const passport = require("../passport");


router.post("/add", (req, res, next) => {
  const { link, name, description, board } = req.body;
  console.log('kjlj', board)
  Link.create({
    link,
    name,
    description,
    board,
    user: req.user
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
  Link.find({ user: user })
    .then(listing => {
      res.json({ type: "success", data: { listing } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
