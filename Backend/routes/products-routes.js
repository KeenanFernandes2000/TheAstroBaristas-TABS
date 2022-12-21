const express = require("express"); //import express
const router = express.Router(); //create express app
const bodyParser = require("body-parser"); //import body-parser
const ProdModel = require("../models/ProductsModel.js");
const cloudinary = require("cloudinary").v2;

router.post("/add", async function (req, res) {
  let newDocument = {
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    color: req.body.color,
  };

  if (Object.values(req.files).length > 0) {
    const files = Object.values(req.files);

    // upload to Cloudinary
    await cloudinary.uploader.upload(
      files[0].path,
      (cloudinaryErr, cloudinaryResult) => {
        if (cloudinaryErr) {
          console.log(cloudinaryErr);
          res.json({
            status: "not ok",
            message: "Error occured during image upload",
          });
        } else {
          // Include the image url in formData
          newDocument.image = cloudinaryResult.url;
          // console.log("formData.image", newDocument.image);
        }
      }
    );
  } else {
    newDocument.image = "https://actogmbh.com/files/no-product-image.png";
  }

  ProdModel.create(newDocument)
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (err) {
      console.log("/product/add error", err);
      res.send("An Error Occurred");
    });
});

router.post("/findbyid", function (req, res) {
  ProdModel.findById(req.user.id)
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/product/find error", error);

      res.send("An error occured");
    });
});

//Find All Products
router.post("/findall", function (req, res) {
  ProdModel.find({
    // brand: req.body.brand,
  })
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/product error", error);

      res.send("An error has occured");
    });
});

router.put("/update", function (req, res) {
  let updates = {};
  if (req.body.products) {
    updates.product = req.body.products;
  }
  ProdModel.findOneAndUpdate()
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (err) {
      console.log("/product/update error", err);
      res.send("An Error Occurred");
    });
});

router.delete("/delete", function (req, res) {
  ProdModel.findOneAndDelete({ name: req.body.name }, { new: true })
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (err) {
      console.log("/product/delete error", err);
      res.send("An Error Occurred");
    });
});

module.exports = router;
