var React = require('react');
var ReactDOM = require('react-dom');
var Twitter = require('./twitter');

ReactDOM.render(
  <Twitter url="tweets.json" />,
  document.getElementById('tweets')
);