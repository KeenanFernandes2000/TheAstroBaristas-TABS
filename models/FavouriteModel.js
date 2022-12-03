const mongoose = require("mongoose");

// Schema

const FavouriteSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  favName: {
    type: String,
    required: true,
  },
  products: {
    type: [String],
    required: true,
  },
  totalCost: {
    type: Number,
    required: false,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Model
const FavouriteModel = mongoose.model("favourites", FavouriteSchema);

// Export the model
module.exports = FavouriteModel;
