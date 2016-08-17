var React = require('react');
var ReactDOM = require('react-dom');
import Twitter from './components/twitter';

ReactDOM.render(
  <Twitter url="tweets.json" />,
  document.getElementById('tweets')
);