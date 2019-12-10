var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var postData = require('./postData.json');

var app = express();
var port = 3712;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('*', function (req, res, next){
  console.log(req.url);
  next();
});

app.get('/', function (req, res, next){
  console.log("= main page");
  res.render('driver');
});

app.get('/:fileName', function (req, res, next){
  var fileName = req.params.fileName.toLowerCase();
  console.log(fileName);

  if(fileName == 'favicon.ico'){
    res.status(200).sendFile(__dirname + '/public/logo.jpg');
  }
  else if(fileName == 'driver'){
    res.render('driver', {posts:postData});
  }
  else if(fileName == 'rider'){
    res.render('rider', {posts:postData});
  }
  else{
    next();
  }


});

app.get('*', function (req, res, next){
  console.log("404");
  res.status(404).render('404', {path : req.url});
});


app.listen(port, function (err) {
    if (err) {
      throw err;
    }
    console.log("== Server listening on port", port);
});
