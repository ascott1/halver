/** @jsx React.DOM */

var React = require('react/addons');


var resultsPerPage = 100;

var ReactIndex = React.createClass({

  render: function () {
    return (
      <p>Hello World!</p>
    )
  }

});

/* Module.exports instead of normal dom mounting */
module.exports.ReactIndex = ReactIndex;