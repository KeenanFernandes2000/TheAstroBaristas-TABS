const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  quantity: {
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
  brand: {
    type: String,
    required: false,
  },
  createdDate: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("Products", ProductSchema);

module.exports = ProductModel;
