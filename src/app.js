import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Twitter } from './components/presentation';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
  	<Twitter/>
  </Provider>,
  document.getElementById('twitter')
);