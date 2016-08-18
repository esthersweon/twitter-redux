import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TweetFormContainer from './containers/tweetFormContainer';
import TweetListContainer from './containers/tweetListContainer';

const Twitter = React.createClass({
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetFormContainer />
        <TweetListContainer />
      </div>
    );
  }
});

export default Twitter;
