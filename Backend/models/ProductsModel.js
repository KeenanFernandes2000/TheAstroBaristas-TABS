const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },

  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  image: {
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
