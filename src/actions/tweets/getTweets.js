'use strict';

const getTweets = () => {
  return dispatch => {
    return fetch(`/tweets.json`, {
        method      : 'GET',
        credentials : 'same-origin',
        headers     : new Headers({ 'Content-Type' : 'application/json '})
      })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'getTweets', data });
      });
  };
};

module.exports = getTweets;