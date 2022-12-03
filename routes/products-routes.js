const express = require("express"); //import express
const router = express.Router(); //create express app
const bodyParser = require("body-parser"); //import body-parser
const ProdModel = require("../models/ProductsModel.js");

router.post("/add", function (req, res) {
  let prodInfo = {
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    color: req.body.color,
  };
  ProdModel.create(prodInfo)
    .then(function (prodDoc) {
      res.json(prodDoc);
    })
    .catch(function (err) {
      console.log("/product/add error", err);
      res.send("An Error Occurred");
    });
});

router.post("/find", function (req, res) {
  ProdModel.find({
    brand: req.body.brand,
  })
    .then(function (prodDoc) {
      res.json(prodDoc);
      console.log(prodDoc);
    })
    .catch(function (err) {
      console.log("/product/find error", err);
      res.send("An Error Occurred");
    });
});

router.post("/update", function (req, res) {
  ProdModel.findOneAndUpdate(
    { brand: req.body.brand },
    { model: req.body.newBrand },
    { new: true }
  )
    .then(function (prodDoc) {
      res.json(prodDoc);
      console.log(prodDoc);
    })
    .catch(function (err) {
      console.log("/product/update error", err);
      res.send("An Error Occurred");
    });
});

router.delete("/delete", function (req, res) {
  ProdModel.deleteOne;
});

module.exports = router;
