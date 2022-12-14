// SOME ISSUE HERE - CHECK WITH SERVER.JS
const express = require("express");
const cors = require("cors");
const expressFormData = require("express-form-data");
const server = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users-routes");
const productsRoutes = require("./routes/products-routes");
require("dotenv").config();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());
server.use(expressFormData.parse());

/*
 * START
 * PassportJS Integration
 */

// Use passport, passport-jwt to read the clien't jwt
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwtSecret = process.env.JWT_SECRET;

const passportJwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

console.log(passportJwtOptions);

// This function will tell passport how what to do
// with the payload.
const passportJwt = (passport) => {
  passport.use(
    new JwtStrategy(passportJwtOptions, (jwtPayload, done) => {
      // Tell passport what to do with payload
      UserModel.findOne({ _id: jwtPayload._id })
        .then((dbDocument) => {
          // The done() function will pass the
          // dbDocument to Express. The user's
          // document can then be access via req.user
          return done(null, dbDocument);
        })
        .catch((err) => {
          // If the _id or anything is invalid,
          // pass 'null' to Express.
          if (err) {
            console.log(err);
          }
          return done(null, null);
        });
    })
  );
};
passportJwt(passport);

// Import and configure Cloudinary
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/*
 * END
 * PassportJS Integration
 */

const dbURL = process.env.DB_URL;

const dbConfig = {
  useNewURLParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbURL, dbConfig)
  .then(function () {
    console.log("Database is connected");
  })
  .catch(function (connectionError) {
    console.log("Database not connected: " + connectionError);
  });

//Home Page
server.get("/", function (req, res) {
  res.send("INDEX PAGE");
});

server.use("/users", usersRoutes);
server.use("/products", productsRoutes);

server.listen(process.env.PORT, function () {
  console.log("Running on http://localhost:3001/");
});
