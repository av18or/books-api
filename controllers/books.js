const router = require("express").Router();
const books = require("../models/books.js");

router.get("/", (req, res) => {
  res.render("books/index", { books });
});


router.post("/", (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = "http://placekitten.com/400/400";
    };