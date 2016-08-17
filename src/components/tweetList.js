var React = require('react');
var ReactDOM = require('react-dom');
var Tweet = require('./tweet');

var TweetList = React.createClass({
  render: function () {
    var tweetData = this.props.data;
    var tweetNodes = tweetData.map(function (tweet) {
      return <Tweet author={ tweet.author } text={ tweet.text } />
    });

    return (
      <div className="tweetList">
        { tweetNodes }
      </div>
    );
  }
});

module.exports = TweetList;