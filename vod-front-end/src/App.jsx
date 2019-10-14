import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Home from './components/Home';
import History from './components/History';
import DetailContainer from './containers/DetailContainer';

function App({ store, history }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/detail/:id">
            <DetailContainer />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired
};

export default hot(App);
