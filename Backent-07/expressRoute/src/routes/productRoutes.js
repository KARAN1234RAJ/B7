const express = require("express");
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("this is from all product page");
});

router.get("/shirt", (req, res) => {
  res.send("this is fro all Shirt");
});

router.get("/cap", (req, res) => {
  res.send("this is fro all cap");
});

module.exports = router;
