const express = require("express");
const router = express.Router();
const ProductModel = require("../models/ProductModel.js");

//Add Product
router.post("/add", function (req, res) {
  //Creating an object to send to mongodb
  let newDocument = {
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    color: req.body.color,
  };

  ProductModel.create(newDocument)
    //if the above is successfull
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    //if the above is unsuccessfull
    .catch(function (error) {
      console.log("/product error", error);

      res.send("An error has occured");
    });
});

//Find Product
router.post("/find", function (req, res) {
  ProductModel.find({
    brand: req.body.brand,
  })
    .then(function (dbDocument) {
      res.json(dbDocument);
      console.log(dbDocument);
    })
    .catch(function (error) {
      console.log("/product error", error);

      res.send("An error has occured");
    });
});

//Update Product
router.put("/update", function (req, res) {
  ProductModel.findOneAndUpdate(
    { model: req.body.model, repModel: req.body.repModel },
    { $set: { model: req.body.repModel } },
    { new: true }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/product error", error);

      res.send("An error has occured");
    });
});

module.exports = router;
