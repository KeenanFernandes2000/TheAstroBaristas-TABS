const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//Importing routes to server
const favouritesRoutes = require("./routes/favourites-routes.js");
const productsRoute = require("./routes/products-routes");
const usersRoutes = require("./routes/user-routes.js");

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

//Using separate urls for each route
server.use("/favourites", favouritesRoutes);
server.use("/product", productsRoute);
server.use("/users", usersRoutes);

server.listen(3001, function () {
  console.log("Running on http://localhost:3001/");
});
