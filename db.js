const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const mongoURI = "mongodb://user:password@ds111123.mlab.com:11123/image-parser-microservice";

/**
 * Connect to Mongodb
 */
MongoClient.connect(mongoURI, function(err, db) {
  if(err) { 
    console.log(err); 
    return;
  }
  
  const collection = db.collection("url-map");
  

  collection.findOne({hash: req.params.URL.toString() }
    , function(err, item) {
    if (err) {
      console.log(err);
      res.writeHead(420);
      res.end("error retrieving short url from database");
      return;
    }

  });


  

    // store url
    collection.insert({'url': req.params[0], 'hash': hash}
      , {w:1}
      , function(err, result) {
      if (err) {
        res.writeHead(400);
        console.log(err);
        res.end("error inserting url into databse");
        return;
      }

      console.log(JSON.stringify({'newUrl': hash}));
      
      // return json
      res.writeHead(200);
      res.end(JSON.stringify({'newUrl': hash}));
    });
  });

