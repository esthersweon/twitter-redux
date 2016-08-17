import { createStore } from 'redux';
import twitterApp from './reducers';

let store = createStore(twitterApp, window.STATE_FROM_SERVER);

// import { getTweets, addTweet } from './actions';

// Log the initial state
// console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// Dispatch some actions
// store.dispatch(getTweets());
// store.dispatch(addTweet({author: 'Esther', text: 'It is working!'}));

// unsubscribe()

export default store;