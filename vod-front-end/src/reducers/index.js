import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import movies from './Movies';
import recentwatched from './Detail';
import watched from './History';

const createReaducer = history =>
  combineReducers({
    router: connectRouter(history),
    movies,
    recentwatched,
    watched
  });

export default createReaducer;
