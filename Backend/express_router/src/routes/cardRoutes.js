const express = require("express");

const router = express.Router();

router.get("/items", (req, res) => {
  console.log("All item are here");
  res.send("All item are here");
});
router.get("/checkout", (req, res) => {
  console.log("CheckOut from  here");
  res.send("CheckOut from  here");
});
router.get("/totlaPrice", (req, res) => {
  console.log("Your Total Price is here");
  res.send("Your Total Price is here");
});

module.exports = router;