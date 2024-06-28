const Product = require("../modules/productModule");
// getting all product
const getAllProducts = (req, res) => {
  Product.find()
    .then((data) => {
      res.json({ status: "success", total: data.length, result: data });
    })
    .catch((err) => {
      res.json({ status: "failed", error: err.message });
    });
};
// getting single product
const getSingleProduct = (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  Product.findById(productId)
    .then((data) => {
      res.json({ status: "success", result: data });
    })
    .catch((err) => {
      res.json({ status: "failed", error: err.message });
    });
  //   res.send("Single Product");
};

// creating single product
const createProduct = (req, res) => {
  //   console.log("body", req.body);
  const { totalQuantity, ...rest } = req.body;
  const newProduct = { ...rest, quantity: totalQuantity };
  // creating single product
  Product.create(newProduct)
    .then((data) => {
      console.log("created Data", data);
      res.status(201).send("Product added successfully");
    })
    .catch((err) => {
      console.error("Error adding product:", err);
      res.status(500).send("Error adding product");
    });
};

// getting filter product
const getFilterProduct = (req, res) => {
  //   Product.find({ category: "electronic" })
  //   Product.find({ price: 50000 })
  //// limit the result
  //   Product.find({ rating: "4.5" }).limit(4)

  //     .then((data) => {
  //       res.json({ status: "success", total: data.length, result: data });
  //     })
  //     .catch((err) => {
  //       res.json({ status: "failed", error: err.message });
  //     });
  // selective property
  //   Product.find({ rating: "4.5" })
  // //     .select({ name: 1, price: 1, rating: 1 }) // 1 for show
  //     .select({ name: 0, price: 0, rating: 0 }) // 0 for hide
  //     .then((data) => {
  //       res.json({ status: "success", total: data.length, result: data });
  //     })
  //     .catch((err) => {
  //       res.json({ status: "failed", error: err.message });
  //     });
  // // operators >, >=, <, =< , !== ---> gt, gte, lt, lte, ne

  Product.find({ price: { $lte: 5000 } })
    .select({ name: 1, price: 1, rating: 1 }) // 1 for show

    .then((data) => {
      res.json({ status: "success", total: data.length, result: data });
    })
    .catch((err) => {
      res.json({ status: "failed", error: err.message });
    });
  // for 1st product
  //     Product.findOne({ price: 50000 })
  //     .then((data) => {
  //       res.json({ status: "success", total: data.length, result: data });
  //     })
  //     .catch((err) => {
  //       res.json({ status: "failed", error: err.message });
  //     });
  //   res.send("Filter Product");
};

// creating list of product
//insertMany

const updateExistingProduct = (req, res) => {
  console.log("Updated or Created");
  //   const { productId } = req.params;
  //   const dataToupdate = req.body;
  //   Product.updateOne({_id : productId})// this is generic one
  //   Product.updateMany({category : "electronic"})// this is generic one

  //   Product.findByIdAndUpdate(productId, { $set: dataToupdate })// in console show old data
  //   Product.findByIdAndUpdate(productId, { $set: dataToupdate }, { new: true })
  //     .then((data) => {
  //       console.log("data", data);
  //       res.json({ status: "success", message: "Updated success" });
  //     })
  //     .catch((err) => {
  //       res.json({ status: "failed", error: err.message });
  //     });
  res.send("Updated or Created");
};

// update or create product

const updateOrCreateProduct = (req, res) => {
  //finfById -->Id if yes-- update || if no -- create
  console.log("Updated or Created");
  Product.updateOne({ price: 47560 }, req.body, { upsert: true })
    .then((data) => {
      console.log("data", data);
      res.json({ status: "success", message: "Updated success" });
    })
    .catch((err) => {
      res.json({ status: "failed", error: err.message });
    });
};

// delete product
const deleteProduct = (req, res) => {
  const { productId } = req.params;
  console.log(productId);

  Product.findByIdAndDelete(productId)
    .then((data) => {
      console.log("product Deleted", data);
      res.json({ status: "success", message: "Deleted success" });
    })
    .catch((err) => {
      res.json({ status: "failed", error: err.message });
    });
  // res.send("Deleted");
  // Prodyct.deleteOne(filter__logic)
  //   Product.deleteMany(Filter--Logic)
};

// pagination
const getPaginatedData = (req, res) => {
  const { page, size } = req.query;
  console.log(page, size);
  Product.find()
  .skip((page - 1) * size)
    .limit(size)
    .then((data) => {
      res.json({ status: "success", total: data.length, data: data });
    })
    .catch((err) => {
      res.json({ status: "failed", error: err.message });
    });
};
//   res.send("Pagination");

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  getFilterProduct,
  updateExistingProduct,
  updateOrCreateProduct,
  deleteProduct,
  getPaginatedData,
};
