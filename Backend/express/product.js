const express = require("express");
// creating new application
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors())
console.log("From Products page");
const products = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "Saree", category: "Clothing", price: 4000 },
  { id: "103", name: "Watch", category: "accessories", price: 3000 },
  { id: "104", name: "Shirt", category: "Clothing", price: 5000 },
  { id: "105", name: "HeadPhone", category: "accessories", price: 3500 },
  { id: "106", name: "Earphone", category: "accessories", price: 4500 },
  { id: "107", name: "Mobile", category: "accessories", price: 3500 },
];

app.get("/products", (req, res) => {
  res.status(200).json({
    total: products.length,
    data: products,
  });
});

// for single product
app.get("/products/:productId", (req, res) => {
  const id = req.params.productId;
  console.log(id);
  const myProduct = products.filter((product) => product.id === id);
  console.log(myProduct);
  res.send(myProduct);
});

app.get("/products/:productId/name/:productName", (req, res) => {
  console.log(req.params);
  const { productId, productName } = req.params;
  console.log(productId, productName);
  const myProduct = products.filter(
    (product) => product.name === productName && product.id === productId
  );
  console.log(myProduct);
  res.send(myProduct);
});

app.get("/product/", (req, res) => {
  console.log(req.query);
  const { category, price, maxPrice } = req.query;
  console.log(category, price, maxPrice);
  //   if (category) {
  //     const productsByCategory = products.filter(
  //       (product) => product.category == category
  //     );
  // //     console.log(productsByCategory);
  //     res.send({
  //       total: productsByCategory.length,
  //       records: productsByCategory
  //     });
  //   }

  if (price) {
    const itemBasedOnPrice = products.filter(
      (product) => product.price > maxPrice
    );
    console.log(itemBasedOnPrice);
    res.send({
      total: itemBasedOnPrice.length,
      result: itemBasedOnPrice,
    });
  }

  res.send("single product");
});

// Create product
app.post("/product", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201);
  res.send({ message: "product created" });
});

app.put("/product/:productId",(req,res)=>{
     // needs id to search
     //need complete data to update --> req.body
     const {productId} = req.params
     console.log("Product updated", productId);
     // find the element
     // remove the element
     // add the element
     
})
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port NO: ${PORT}`);
});
