import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import movies from './Movies';
import watched from './Detail';

const createReaducer = history =>
  combineReducers({
    router: connectRouter(history),
    movies,
    watched
  });

export default createReaducer;
