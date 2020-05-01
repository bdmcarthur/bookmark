const express = require("express");
const router = express.Router();
const Board = require("../database/models/board");
const passport = require("../passport");

router.post("/add", (req, res, next) => {
  const { name, description, collections } = req.body;
  console.log(req.body);
  Board.create({
    name,
    description,
    collections,
    user: req.user,
  })
    .then((boards) => {
      res.json({ type: "success", data: { boards } });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/load", (req, res, next) => {
  let collection = req.body.collection;

  Board.find({ collections: collection })
    .then((boards) => {
      res.json({ type: "success", data: { boards } });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
