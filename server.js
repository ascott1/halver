var express = require('express');
var path = require('path');

var app = express();

// set up base view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});