import { GET_TWEETS, ADD_TWEET } from './actionTypes';

const getTweets = () => {
  return {
    type: GET_TWEETS,
    data: {}
  }
}

const addTweet = (text, author) => {
  // let tweet = { text, author };

  // $.post("tweets.json", tweet, (data) => {
      // this.setState({ data: data });
  return {
		type: ADD_TWEET,
		data: { text, author }
	};
  // );
}

module.exports = {
	getTweets: getTweets,
	addTweet: addTweet
};