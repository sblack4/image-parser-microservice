// server.js
// where your node app starts

// imports 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// globals 
const host = process.env.IP || 'localhost';
const port = process.env.PORT || 80;
const mongoURI = "mongodb://user:password@ds111123.mlab.com:11123/image-parser-microservice";

