const express = require("express");
const router = express.Router();
const FavouriteModel = require("../models/FavouriteModel.js");

//Create a Favourites
router.post("/create", function (req, res) {
  //Creating an object to send to mongodb
  let newDocument = {
    userID: req.body.userID,
    favName: req.body.favName,
    products: req.body.products,
    totalCost: req.body.totalCost,
  };

  FavouriteModel.create(newDocument)
    //if the above is successfull
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    //if the above is unsuccessfull
    .catch(function (error) {
      console.log("/favourites error", error);

      res.send("An error has occured");
    });
});

//Find Favourite
router.post("/find", function (req, res) {
  FavouriteModel.find({
    favName: req.body.favName,
  })
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (error) {
      console.log("/user error", error);

      res.send("An error has occured");
    });
});

//Find All Favourites
router.post("/findall", function (req, res) {
  FavouriteModel.find({})
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (error) {
      console.log("/user error", error);

      res.send("An error has occured");
    });
});

//Update One Favourite
router.put("/update", function (req, res) {
  let updates = {};
  if (req.body.products) updates["products"] = req.body.products;

  FavouriteModel.findOneAndUpdate(
    { favName: req.body.favName },
    { $set: updates },
    { new: true }
  )
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (error) {
      console.log("/users/update error", error);
      res.send("An error has occured");
    });
});

//Delete One Favourite
router.put("/delete", function (req, res) {
  FavouriteModel.findOneAndDelete({ favName: req.body.favName }, { new: true })
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (error) {
      console.log("/users/update error", error);
      res.send("An error has occured");
    });
});

module.exports = router;
