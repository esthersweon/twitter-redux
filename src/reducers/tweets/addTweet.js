'use strict';

const addTweet = function(state, action) {
  return [
    {
      id     : action.data.id,
      text   : action.data.text,
      author : action.data.author
    },
    ...state
  ];
};

module.exports = addTweet;