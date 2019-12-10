var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var postData = require('./postData.json');
var bodyParse = require('body-parser');

var app = express();
var port = 3712;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParse.json());


app.get('*', function (req, res, next){
  console.log(req.url);
  next();
});

app.get('/', function (req, res, next){
  console.log("= main page");
  res.render('menu');
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
app.post('/driver/addPost', function(req, res, next){
    if (req.body && req.body.name && req.body.license && req.body.car && req.body.time && req.body.date && req.body.start && req.body.end) {
      postData.push({
        name: req.body.name,
        license: req.body.license,
        car: req.body.car,
        time: req.body.time,
        date: req.body.date,
        start: req.body.start,
        end: req.body.end
      });
      console.log("== postData:", postData);
      fs.writeFile(
        __dirname + '/postData.json',
        JSON.stringify(postData, 2, null),
        function (err) {
          if (!err) {
            res.status(200).send();
          } else {
            res.status(500).send("Failed to write data on server side.");
          }
        }
      );
    } else {
      res.status(400).send("Request body is missing values.");
    }

})
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
