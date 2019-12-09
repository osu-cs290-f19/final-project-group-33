var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = 3712;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('*', function (req, res, next){
  console.log(req.url);
  next();
});

app.get('/', function (req, res, next){
console.log("main");
res.render('test', {});
});

app.get('/:fileName', function (req, res, next){
  var fileName = req.params.fileName.toLowerCase();
  console.log(fileName);

  if(fileName == 'favicon.ico' || fileName == 'logo.jpg'){
    res.sendFile(__dirname + '/public/logo.jpg');
  }
  else if(fileName == 'style.css'){
    res.sendFile(__dirname + '/public/style.css');
}
next();

});


app.listen(port, function (err) {
    if (err) {
      throw err;
    }
    console.log("== Server listening on port", port);
  });


