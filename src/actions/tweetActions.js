export const GET_TWEETS = 'GET_TWEETS';
export const ADD_TWEET = 'ADD_TWEET';

// Action creators
const getTweetsAction = (tweets) => {
  return {
    type: GET_TWEETS,
    data: tweets
  }
};

const addTweetAction = (text, author) => {
  return {
		type: ADD_TWEET,
		data: { text, author }
	};
};

// Fetch calls
const fetchTweetsFromDb = () => {
  return fetch(`/tweets.json`, {
    method      : 'GET',
    credentials : 'same-origin',
    headers     : new Headers({ 'Content-Type' : 'application/json '})
  }).then(res => res.json());
};

const addTweetToDb = (text, author) => {
  return fetch(`/tweets.json`, {
    method      : 'POST',
    credentials : 'same-origin',
    headers     : new Headers({ 'Content-Type' : 'application/json '}),
    body        : JSON.stringify({ text, author })
  }).then(res => res.json());
};

// Thunks
export const getTweets = () => {
  return dispatch => {
    return fetchTweetsFromDb().then(data => {
      dispatch(getTweetsAction(data));
    });
  };
}

export const addTweet = (text, author) => {
  return dispatch => {
    return addTweetToDb(text, author).then(data => {
      dispatch(addTweetAction(text, author));
    });
  };
};