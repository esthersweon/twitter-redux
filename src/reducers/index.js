import { combineReducers } from 'redux';
import R from 'ramda';
import { routerReducer } from 'react-router-redux';
import tweetsReducer from './tweets'

const initialState = [];

const loadReducer = R.curry((initialState, reducer, state, action) => {
  try {
    return R.invoker(2, action.type)(R.defaultTo(initialState, state), action, reducer)
  } catch (e) {
    return R.defaultTo(initialState, state);
  }
});

let appState = combineReducers({
	routing : routerReducer,
	tweets  : loadReducer(initialState, tweetsReducer)
});

export default appState;