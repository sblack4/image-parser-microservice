
// imports 
var MongoClient = require('mongodb').MongoClient;
const app = require("./app.js");

// globals 
const mongoURI = "mongodb://" + process.env.SECRET + "@ds111123.mlab.com:11123/image-parser-microservice";
var db;
var collection;

// Initialize connection once
MongoClient.connect(mongoURI, function(err, database) {
  if(err){
    console.log(err);
  }

  db = database;
  collection = db.collection("history");

  app(collection);
});
