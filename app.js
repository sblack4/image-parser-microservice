const express = require("express");

const app = express();
var host = process.env.IP || 'localhost';
var port = process.env.PORT || 80;

function start() {
  
  app.get("/", (request, response) => {
    response.end("try going to /latest");
  });
  
  app.get("/latest", (request, response) => {
    response.end("latest");
  });


  app.get("/imagesearch/:query", (request, response) => {
    const search_term = request.params.query.toString();
    const offset = request.query.offset;
    
    response.end(request.params.query.toString()+ " query str " + request.query.offset);
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
}

module.exports = start;