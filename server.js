
// imports 
const mongodb = require('mongodb');
const app = require("./app.js");

// globals 
const host = process.env.IP || 'localhost';
const port = process.env.PORT || 80;
const mongoURI = "mongodb://user:password@ds111123.mlab.com:11123/image-parser-microservice";

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect(mongoURI, function(err, database) {
  if(err) throw err;

  db = database;

  /**
   * Listen for requests
   */
  app.listen(port, function(err, data) {
    if (err) {
      console.log("Error starting express on port " + port);
      console.log(err);
    }
    console.log("express on port " + port);
  });
});
