import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import History from './History';
import './App.scss';

function App() {
  return (
    <div className="app-style">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
    </div>
  );
}

export default hot(module)(App);
