const express = require("express");
// creating app, instance
// creating new application
const app = express();
console.log("This is from index file");
const products = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
];

const userList = [
  { id: "101", name: "Vinisha" },
  { id: "102", name: "Rohit" },
  { id: "103", name: "Ranu" },
  { id: "104", name: "Rishika" },
];

app.get("/", (req, res) => {
  console.log("request recieved");
  res.send("Hellow welcome to express");
});

app.post("/", (req, res) => {
  res.send("created");
});

app.get("/products", (req, res) => {
  //   const data = JSON.stringify(products);
  //   res.send(data);
  res.send(products);
});

app.get("/users", (req, res) => {
     res.send(userList);
   });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port No: ${PORT}`);
});
