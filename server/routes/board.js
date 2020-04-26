const express = require("express");
const router = express.Router();
const Board = require("../database/models/board");


router.post("/add", (req, res, next) => {
  const { name, description } = req.body;
  Board.create({
    name,
    description,
    user: req.user
  })
    .then(boards => {
      res.json({ type: "success", data: { boards } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/load", (req, res, next) => {
  let user = req.user
  Board.find({ user: user })
    .then(boards => {
      res.json({ type: "success", data: { boards } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
