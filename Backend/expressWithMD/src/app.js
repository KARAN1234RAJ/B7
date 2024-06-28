const express = require("express");
const app = express();
const productRouter = require("./routes/productRoute");
const dotEnv = require("dotenv");
dotEnv.config();
require("./connectToDb");

app.use("/", productRouter);

app.get("/", (req, res) => {
  console.log("Home page");
  res.send("Home page");
});
module.exports = app;
