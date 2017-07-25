const express = require("express");

const app = express();
const host = process.env.IP || 'localhost';
const port = process.env.PORT || 80;

function start(collection) {
  app.get("/", (request, response) => {
    response.end("try going to /latest");
  });

  app.get("/latest", (request, response) => {
    collection.find({}
      , function(err, item) {
        if (err) {
          console.log(err);
          response.writeHead(420);
          response.end("error retrieving short url from database");
          return;
        }

        console.log(item);

        response.end(JSON.stringify(item));
      });
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