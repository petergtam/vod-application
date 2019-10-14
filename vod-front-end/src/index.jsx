/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore, { history } from './store';

const store = createStore();

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
);
