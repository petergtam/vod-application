/* eslint-disable import/no-extraneous-dependencies */
import { routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import createReaducer from './reducers';

export const history = createBrowserHistory();

export default function(preloadedState) {
  const middlewares = [routerMiddleware(history), thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = compose(middlewareEnhancer);
  const rootReducer = createReaducer(history);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(createReaducer(history))
    );
  }

  return store;
}
