const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
