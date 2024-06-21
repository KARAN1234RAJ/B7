const express = require("express");
const router = express.Router();

// router.get("/product/all", (req, res) => {
//   console.log("This is all products page");
//   res.send("This is all products page");
// });

router.get("/all", (req, res) => {
     console.log("This is all products page");
     res.send("This is all products page");
   });
router.get("/shirt", (req, res) => {
  console.log("This is all shirts page");
  res.send("This is all shirts page");
});

router.get("/jins", (req, res) => {
     console.log("This is all jins page");
     res.send("This is all jins page");
   });

module.exports = router;
