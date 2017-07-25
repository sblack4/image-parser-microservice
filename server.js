
// imports 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express_app = require("./app.js");

// globals 
const host = process.env.IP || 'localhost';
const port = process.env.PORT || 80;
const mongoURI = "mongodb://user:password@ds111123.mlab.com:11123/image-parser-microservice";

const history_schema = new Schema({
  term: String,
  when: String
});

const History = mongoose.model('History', history_schema);
mongoose.connect(mongoURI);

express_app();
