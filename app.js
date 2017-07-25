const express = require("express");

const app = express();
  
app.get("/", (request, response) => {
  response.end("try going to /latest");
});

app.get("/latest", (request, response) => {

});


app.get("/imagesearch/:query", (request, response) => {
  const search_term = request.params.query.toString();
  const offset = request.query.offset;

  response.end(request.params.query.toString()+ " query str " + request.query.offset);
});

module.exports = app;