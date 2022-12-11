const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
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
  weight: {
    type: Number,
    required: false,
  },
  category: {
    type: String,
    required: false,
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
