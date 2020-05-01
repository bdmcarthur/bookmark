const express = require("express");
const router = express.Router();
const Link = require("../database/models/link");


router.post("/add", (req, res, next) => {
  const { link, name, description, board, type } = req.body;
  Link.create({
    link,
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
  Link.find({ user: user })
    .then(listing => {
      res.json({ type: "success", data: { listing } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
