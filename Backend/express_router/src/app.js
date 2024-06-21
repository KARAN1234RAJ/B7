const express = require("express");
const app = express();
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cardRoutes");
const { isLogedin, isValidUser } = require("./middleware");

app.use(isLogedin);
app.use(isValidUser);
// app.use("/", productRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
  console.log("hello== ");
  res.send("hello welcome to MVC Archicture");
});

module.exports = app;
