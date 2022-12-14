const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel.js");

//Add User
router.post("/register", function (req, res) {
  //Creating an object to send to mongodb
  let newDocument = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  UserModel.create(newDocument)
    //if the above is successfull
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    //if the above is unsuccessfull
    .catch(function (error) {
      console.log("/registration error", error);

      res.send("An error has occured");
    });
});

//Find User
router.post("/find", function (req, res) {
  UserModel.find({
    firstName: req.body.firstName,
  })
    .then(function (dbDocument) {
      res.json(dbDocument);
      console.log(dbDocument);
    })
    .catch(function (error) {
      console.log("/user error", error);

      res.send("An error has occured");
    });
});

//Find All Users
router.post("/findall", function (req, res) {
  UserModel.find({})
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

//Update User
router.put("/update-old", function (req, res) {
  UserModel.findOneAndUpdate(
    { email: req.body.email, repEmail: req.body.repEmail },
    { $set: { email: req.body.repEmail } },
    { new: true }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
      console.log(dbDocument);
    })
    .catch(function (error) {
      console.log("/user error", error);
      res.send("An error has occured");
    });
});

//Update User v2.0
router.put("/update", function (req, res) {
  let updates = {};

  if (req.body.firstName) updates["firstName"] = req.body.firstName;
  if (req.body.lastName) updates["lastName"] = req.body.lastName;
  if (req.body.phone) updates["phone"] = req.body.phone;

  UserModel.findOneAndUpdate(
    { email: req.body.email },
    { $set: updates },
    { new: true }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
      console.log(dbDocument);
    })
    .catch(function (error) {
      console.log("/users/update error", error);
      res.send("An error has occured");
    });
});

//Update User Preferences
router.put("/preferences", function (req, res) {
  let updates = {};

  if (req.body.subscription)
    updates["subscription"] = Boolean(req.body.subscription);

  UserModel.findOneAndUpdate(
    { email: req.body.email },
    { $set: updates },
    { new: true }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
      console.log(dbDocument);
    })
    .catch(function (error) {
      console.log("/users/update error ", error);
      res.send("An error has occured");
    });
});

module.exports = router;
