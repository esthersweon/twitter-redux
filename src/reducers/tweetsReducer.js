import { combineReducers } from 'redux';
import { GET_TWEETS, ADD_TWEET } from '../actions/tweetActions';

const initialState = [];

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TWEETS:
      return [
        ...action.data,
        ...state
      ];
    case ADD_TWEET:
      return [
        {
          id: action.data.id,
          text: action.data.text,
          author: action.data.author
        },
        ...state
      ];
    default:
      return state;
  }
};

export default tweetsReducer;