import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import * as API from './utils/_DATA';
import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);
window.debugAPI = API;
window.debugStore = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
