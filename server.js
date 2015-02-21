var express = require('express');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);
require("node-jsx").install();

// set up base view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set up public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Set up the route
require('./routes/index.js')(app);

var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});