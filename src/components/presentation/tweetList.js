import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './tweet';

const TweetList = React.createClass({
  render: function(){
    return <div className="tweetList">
      { this.props.data.map(tweet => {
        return <Tweet author={ tweet.author } text={ tweet.text } />
      }) }
    </div>
  }
});

TweetList.defaultProps = {
  data: PropTypes.array.isRequired
};

export default TweetList;