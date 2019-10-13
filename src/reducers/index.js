import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import movies from './Movies';

const createReaducer = history =>
  combineReducers({
    router: connectRouter(history),
    movies
  });

export default createReaducer;
