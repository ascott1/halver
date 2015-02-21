var React = require('react/addons');
var ReactIndex = React.createFactory(require('../components/ReactIndex').ReactIndex);

module.exports = function(app) {

  app.get('/', function(req, res){
    var reactHtml = React.renderToString(ReactIndex({}));
    res.render('index.ejs', {reactOutput: reactHtml});
  });

};