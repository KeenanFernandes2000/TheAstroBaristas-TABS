const express = require("express"); //import express
const router = express.Router(); //create express app
const bodyParser = require("body-parser"); //import body-parser
const ProdModel = require("../models/ProductsModel.js");

router.post("/add", function (req, res) {
  let prodInfo = {
    name: req.body.name,
    weight: req.body.weight,
    quantity: req.body.quantity,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating,
    brand: req.body.brand,
    createdDate: req.body.createdDate,
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
router.post("/findall", function (req, res) {
  ProdModel.find({})
    .then(function (prodDoc) {
      res.json(prodDoc);
      console.log(prodDoc);
    })
    .catch(function (err) {
      console.log("/product/findall error", err);
      res.send("An Error Occurred");
    });
});

router.put("/update", function (req, res) {
  let updates = {};
  if (req.body.products) {
    updates.product = req.body.products;
  }
  ProdModel.findOneAndUpdate()
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
  ProdModel.findOneAndDelete({ name: req.body.name }, { new: true })
    .then(function (prodDoc) {
      res.json(prodDoc);
      console.log(prodDoc);
    })
    .catch(function (err) {
      console.log("/product/delete error", err);
      res.send("An Error Occurred");
    });
});

module.exports = router;
