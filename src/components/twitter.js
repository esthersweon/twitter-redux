import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import VisibleTweetForm from './visibleTweetForm';
import VisibleTweetList from './visibleTweetList';

const Twitter = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadTweetsFromServer: function () {
    $.get(this.props.url, function (data) {
        this.setState({ data: data });
      }.bind(this)
    );
  },
  handleTweetSubmit: function (author, text) {
    var tweet = { author: author, text: text };

    $.post(this.props.url, tweet, function (data) {
        this.setState({ data: data });
      }.bind(this)
    );
  },
  componentDidMount: function () {
    this.loadTweetsFromServer();
  },
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm onTweetSubmit={ this.handleTweetSubmit } />
        <VisibleTweetList data={ this.state.data } />
      </div>
    );
  }
});

Twitter.defaultProps = {
  data: PropTypes.array.isRequired
}

export default Twitter;
