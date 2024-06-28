const express = require("express");
const router = express.Router();

router.get("/all", (req, res) => {
  console.log("Hello");
  res.send("This is product page ");
});

module.exports = router;
