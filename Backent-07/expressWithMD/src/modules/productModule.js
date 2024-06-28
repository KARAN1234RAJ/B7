// const mongoose = require('mongoose');

const { Schema, model } = require("mongoose");

// const productSchema = new mongoose.Schema()
const productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  rating: String,
  inStock: Boolean,
  quantity: Number,
});

const Product = new model("products", productSchema);

module.exports = Product;
