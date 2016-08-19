import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { App, Twitter } from './components/presentation';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Twitter } />
        {/*<Route path="goal/:goalId" component={ GoalContainer } />*/}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('twitter')
);