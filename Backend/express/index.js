const express = require("express");

// creating new application
const app = express();
console.log("From Index page ");
const products = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
];

//create a get endpoint and execute any callback when request recieved
app.get("/", (req, res) => {
  console.log("request recieved");
  res.send("Hello welcome to Home page!");
});

app.post("/", (req, res) => {
  res.send("Creaed successs");
});

app.get("/product", (req, res) => {
  // const data = JSON.stringify(products);
  res.send(products);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port NO: ${PORT}`);
});
