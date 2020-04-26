const express = require("express");
const router = express.Router();
const subBoard = require("../database/models/subBoard");
const passport = require("../passport");


router.post("/add", (req, res, next) => {
  const { name, description, board } = req.body;
  subBoard.create({
    name,
    description,
    board
  })
    .then(boards => {
      res.json({ type: "success", data: { boards } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/load", (req, res, next) => {
  let board = req.board
  subBoard.find({ board: board })
    .then(boards => {
      res.json({ type: "success", data: { boards } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
