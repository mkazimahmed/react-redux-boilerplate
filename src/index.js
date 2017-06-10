import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.css';

import reducers from './reducers';
import routes from './routes';
import './styles/main.scss';

try {
  const container = document.getElementById('app');
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    container,
  );
} catch (error) {
  throw error;
}
