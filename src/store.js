import { createStore, compose, applyMiddleware } from 'redux';
import appReducers from './reducers';
import thunkMiddleware from 'redux-thunk';

const store = compose(
	applyMiddleware(thunkMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(appReducers);

export default store;