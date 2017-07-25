const express = require("express");
const bing = require('bing.search');

const app = express();
const host = process.env.IP || 'localhost';
const port = process.env.PORT || 80;

/**
 * express app as an exportable function
 */
function start(collection) {
  
  // home route
  app.get("/", (request, response) => {
    response.end("try going to /latest");
  });

  // get last ten searches
  app.get("/latest", (request, response) => {
    collection
      .find({})
      .limit(10)
      .toArray(function(err, item) {
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

  // search for a particular query
  app.get("/imagesearch/:query", (request, response) => {
    const search_term = request.params.query.toString();
    const offset = request.query.offset;
    
    // insert search into history
    collection.insertOne({
        term: search_term
       , when: (new Date()).toISOString() 
      });
    
    const search = new bing(process.env.API_KEY);
    // Query the image and populate results
    search.images(search_term, {
        top: offset
      },
      function(err, results) {
        if (err) throw err;
        response.send(results.map(makeList));
      }
    );


    function makeList(img) {
      // Construct object from the json result
      return {
        "url": img.url,
        "snippet": img.title,
        "thumbnail": img.thumbnail.url,
        "context": img.sourceUrl
      };
    }
    response.end(request.params.query.toString()+ " query str " + request.query.offset);
  });

  // Listen for requests
  app.listen(port, function(err, data) {
    if (err) {
      console.log("Error starting express on port " + port);
      console.log(err);
    }
    console.log("express on port " + port);
  });
}

module.exports = start;