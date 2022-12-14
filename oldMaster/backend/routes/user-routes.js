const express = require("express");
const router = express.Router();

const UserModel = require("../models/UserModel.js");

// http://localhost:3001/users/registration
router.post("/register", function (req, res) {
  let newDocument = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    subscription: Boolean(req.body.subscription),
    phone: req.body.phone,
    dob: req.body.dob,
    avatar: req.body.avatar,
    dateCreated: req.body.dateCreated,
    location: req.body.location,
    language: req.body.language,
  };

  UserModel.create(newDocument)
    // If MongoDB creates document succesfully, then...
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    // Otherwise, if error occurs catch it...
    .catch(function (error) {
      console.log("/registration error", error);

      res.send("An error occured");
    });
});

// http://localhost:3001/users/login
router.post("/login", function (req, res) {
  UserModel.find({ email: req.body.email })
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (error) {
      console.log("/find error", error);

      res.send("An error occured");
    });
});

// http://localhost:3001/users/update
router.put("/update", function (req, res) {
  let updates = {};

  if (req.body.firstName) {
    updates["firstName"] = req.body.firstName;
  }
  if (req.body.lastName) {
    updates["lastName"] = req.body.lastName;
  }
  if (req.body.phone) {
    updates["phone"] = req.body.phone;
  }

  UserModel.findOneAndUpdate(
    {
      email: req.body.email,
    },
    {
      $set: updates,
    },
    {
      new: true,
    }
  )
    .then(function (dbDocument) {
      res.json({
        status: "ok",
        message: dbDocument,
      });
    })
    .catch(function (error) {
      console.log("/users/update error", error);
      res.send("An error occured");
    });
});

router.post(
  "/findid",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    UserModel.findById(req.user.id)
      .then(function (dbDocument) {
        res.json(dbDocument);
      })
      .catch(function (error) {
        console.log("/find error", error);

        res.send("An error occured");
      });
  }
);

module.exports = router;
