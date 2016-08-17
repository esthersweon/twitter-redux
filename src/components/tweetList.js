import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './tweet';

const TweetList = React.createClass({
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

TweetList.defaultProps = {
  data: PropTypes.array.isRequired
};

export default TweetList;