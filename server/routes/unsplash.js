const express = require("express");
const router = express.Router();
require("dotenv").config();

const Unsplash = require('unsplash-js').default;
const toJson = require("unsplash-js").toJson
const unsplash = new Unsplash({
  accessKey: process.env.API_KEY,
});

router.get("/photo/search", (req, res, next) => {
  let query = req.body
  unsplash.search.photos(query, 1, 10, { orientation: "portrait" })
    .then(toJson)
    .then(json => {
      console.log(json)
    });
});

module.exports = router;
