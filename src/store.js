import { createStore, compose, applyMiddleware } from 'redux';
import appReducers from './reducers';
import thunkMiddleware from 'redux-thunk';
// import { getTweets, addTweet } from './actions/tweetActions';

// let store = createStore(appReducers, window.STATE_FROM_SERVER);
const store = compose(
	applyMiddleware(thunkMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(appReducers);

// Log the initial state
// console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log("State changed: ", store.getState())
// )

// Dispatch some actions
// store.dispatch(getTweets());
// store.dispatch(addTweet('Example author', 'Example text'));

// unsubscribe();

export default store;