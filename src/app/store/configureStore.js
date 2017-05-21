import {createStore, applyMiddleware, compose} from 'redux';
import indexReducer from '../reducers';
import thunkMiddleware from 'redux-thunk'; // allows Redux to perform asynchronous operations (e.g. fetching data)
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

const routerMiddlewareWithBrowserHistory = routerMiddleware(browserHistory);
export default initialState => {
  return createStore(
    indexReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(routerMiddlewareWithBrowserHistory)
    )
  );
};
