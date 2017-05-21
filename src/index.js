import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import LandingPage from './app/containers/landingPage';
import configureStore from './app/store/configureStore';

import './index.css';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage}/>
    </Router>
  </Provider>,
  document.getElementById('dashboardApp')
);
