import { createStore } from 'redux';
import twitterApp from './reducers/tweetsReducer';
// import { getTweets, addTweet } from './actions/actionCreators';

let store = createStore(twitterApp, window.STATE_FROM_SERVER);

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