import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tweetsReducer from './tweetsReducer';

let appState = combineReducers({
	routing: routerReducer,
	tweets: tweetsReducer
});

export default appState;