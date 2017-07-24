const express = require("express");

const app = express();
var host = process.env.IP || 'localhost';
var port = process.env.PORT || 80;

app.get("/latest", (request, response) => {
  
});


app.get("/imagesearch/:query", (request, response) => {
  
});

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