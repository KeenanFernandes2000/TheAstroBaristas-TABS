const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

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

server.listen(3001, function () {
  console.log("Running on http://localhost:3001/");
});
