var React = require('react/addons');
var ReactIndex = React.createFactory(require('./components/ReactIndex').ReactIndex);

var mountNode = document.getElementById("react-main-mount");

React.renderComponent(new ReactIndex({}), mountNode);
