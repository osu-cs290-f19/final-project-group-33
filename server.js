var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = 3202;


app.listen(port, function (err) {
    if (err) {
      throw err;
    }
    console.log("== Server listening on port", port);
  });

app.get('/', function (req, res, next){
  res.sendFile(__dirname + /public/ + 'index.html');

});
