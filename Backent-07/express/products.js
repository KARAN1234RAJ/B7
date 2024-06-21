const express = require("express");

const app = express();
app.use(express.json());
console.log("from product page");
const products = [
  { id: "101", name: "shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
  { id: "104", name: "smart-watch", category: "accessories", price: 3500 },
  { id: "105", name: "watch", category: "accessories", price: 2000 },
  { id: "106", name: "smart-watch", category: "accessories", price: 3600 },
  { id: "107", name: "shirt", category: "Clothing", price: 1000 },
  { id: "108", name: "saree", category: "Clothing", price: 4500 },
];

app.get("/", (req, res) => {
  console.log("This is Home page");
  res.send("This is my home page");
});
app.get("/products", (req, res) => {
  res.send({
    total: products.length,
    data: products,
  });
});
app.get("/products/:productId", (req, res) => {
  console.log("This is Home page");
  const { productId } = req.params;
  const selectedProduct = products.find((product) => product.id === productId);
  selectedProduct
    ? res.send(selectedProduct)
    : res.send({ message: "product Not Fount" });
});
app.get("/products/:productName/:productCategory", (req, res) => {
  const { productName, productCategory } = req.params;
  console.log("product selected by name", productName, productCategory);
  const selectedProductByName = products.filter(
    (product) => product.name === productName
  );
  res.send(selectedProductByName);
});

app.get("/product", (req, res) => {
  const { category, name, maxPrice } = req.query;
  console.log(category, name, maxPrice);
  //  const selectedItem = products.filter((item)=> item.category=== category)
  //  res.send({
  //      total: selectedItem.length,
  //      data: selectedItem
  //  })

  const selectedItem = products.filter((item) => item.price > maxPrice);
  res.send({
    total: selectedItem.length,
    data: selectedItem,
  });
});

// Create Product
app.post("/product", (req, res) => {
  console.log("product Created", req.body);
  products.push(req.body);
  res.status(201);
  res.send({
    message: "new product added",
  });
});
// update
app.put("/product/:productId", (req, res) => {
  // needs Id to indentify product
  // need complete data for update --> req.body
  const { productId } = req.params;
  console.log(productId, "-->", req.body);
  // find the element with the help of id
  // remove the element
  // update the element
  // const updatedItem= products.map(item=>item.id === productId)
  // console.log(updatedItem);
  res.send("product updated");
});

// Delete products
app.delete("/product/:productId", (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  const remainingProduct = products.filter(
    (product) => product.id !== productId
  );
  res.send(remainingProduct);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My server is running on port ${PORT}`);
});
