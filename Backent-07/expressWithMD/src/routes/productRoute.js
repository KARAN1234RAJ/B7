const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  getFilterProduct,
  updateExistingProduct,
  updateOrCreateProduct,
  deleteProduct,
  getPaginatedData,
} = require("../controllers/productController");

//// commented code is only for understanding purpose now below code is follow MVC Arch..
// router.post("/new_product", (req, res) => {
//   console.log("body", req.body);
//   Product.create(req.body)
//     .then((data) => {
//       console.log("created Data", data);
//       res.send("Product added successfully");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send("Error adding product");
//     });
//   // res.send("Created");
// });

// router.post("/new_product", (req, res) => {
//   console.log("body", req.body);

//   Product.create(req.body)
//     .then((data) => {
//       console.log("created Data", data);
//       res.status(201).send("Product added successfully");
//     })
//     .catch((err) => {
//       console.error("Error adding product:", err);
//       res.status(500).send("Error adding product");
//     });
// });

// router.get("/all", (req, res) => {
//   Product.find()
//     .then((data) => {
//       res.json({ status: "success", total: data.length, result: data });
//     })
//     .catch((err) => {
//       res.json({ status: "failed", error: err.message });
//     });
// });

router.post("/new_product", createProduct);
router.get("/all", getAllProducts);
router.get("/:productId", getSingleProduct);
router.get("/filter/all", getFilterProduct);
router.patch("/:productId", updateExistingProduct);
router.put("/:productId", updateOrCreateProduct);
router.delete("/delete/:productId", deleteProduct);
router.get("/filter/page", getPaginatedData);

module.exports = router;
