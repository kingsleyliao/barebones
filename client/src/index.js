import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

import App from './components/App';
import reducers from './reducers';

window.axios = axios;

const logger = createLogger();
const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

const root = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}><App /></Provider>, root);
registerServiceWorker();
