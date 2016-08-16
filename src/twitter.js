var React = require('react');
var ReactDOM = require('react-dom');
var TweetForm = require('./tweetForm');
var TweetList = require('./tweetList');

var Twitter = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadTweetsFromServer: function () {
    // GET updated set of tweets from database
    $.get(this.props.url, function (data) {
        this.setState({ data: data });
      }.bind(this)
    );
  },
  handleTweetSubmit: function (author, text) {
    var tweet = { author: author, text: text };

    // POST to add tweet to database
    $.post(this.props.url, tweet, function (data) {
        this.setState({ data: data });
      }.bind(this)
    );
  },
  componentDidMount: function () {
    // Set this.state.data to most recent set of tweets from database
    this.loadTweetsFromServer();
  },
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm onTweetSubmit={ this.handleTweetSubmit } />
        <TweetList data={ this.state.data } />
      </div>
    );
  }
});

module.exports = Twitter;
