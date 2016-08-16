var React = require('react');
var ReactDOM = require('react-dom');

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <h2>{ this.props.text }</h2>
        <span> - { this.props.author }</span>
      </div>
    );
  }
});

module.exports = Tweet;
