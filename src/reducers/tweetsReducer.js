import { combineReducers } from 'redux';
import { GET_TWEETS, ADD_TWEET } from '../actions/actionTypes';

const initialState = {
  tweets: []
}

function tweets(state, action) {
  switch (action.type) {
    case GET_TWEETS:
      return state;
    case ADD_TWEET:
      return [
        ...state,
        {
          text: action.data.text,
          author: action.data.author
        }
      ];
    default:
      return state
  }
}

var tweetsReducer = (state = initialState, action) => {
  return {
    tweets: tweets(state.tweets, action),
  }
}

export default {
  tweetsReducer: tweetsReducer
};