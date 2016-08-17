import { GET_TWEETS, ADD_TWEET } from './actionTypes';

export default getTweets = () => {
  return {
    type: GET_TWEETS,
    data: {}
  }
}

export default addTweet = (text, author) => {
	return {
		type: ADD_TWEET,
		data: {
			text,
			author
		}
	}
}

// module.exports = {
// 	getTweets: getTweets,
// 	addTweet: addTweet
// }