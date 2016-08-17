var React = require('react');
var ReactDOM = require('react-dom');
var Twitter = require('./components/twitter');

ReactDOM.render(
  <Twitter url="tweets.json" />,
  document.getElementById('tweets')
);