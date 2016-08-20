'use strict';

const getTweets = function(state, action) {
  return [
    ...action.data,
    ...state
  ];
};

module.exports = getTweets;