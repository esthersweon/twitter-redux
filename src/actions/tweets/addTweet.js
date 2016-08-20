import { getRandomAlphanumericStr } from '../../utils';

const addTweet = (text, author) => {
  return dispatch => {
    let id = getRandomAlphanumericStr();

    return fetch(`/tweets.json`, {
        method      : 'POST',
        credentials : 'same-origin',
        headers     : new Headers({ 'Content-Type' : 'application/json '}),
        body        : JSON.stringify({ id, text, author })
      })
      .then(_ => {
        dispatch({
          type : 'addTweet',
          data : { id, text, author }
        });
      });
  };
};

module.exports = addTweet;