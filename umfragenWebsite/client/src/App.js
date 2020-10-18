import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import landingPage from './pages/landingPage';
import schuelerumfrage from './pages/schuelerumfrage';
import allgemeineUmfrage from './pages/allgemeineUmfrage';

export default () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={landingPage}/>
          <Route exact path="/schuelerumfrage" component={schuelerumfrage}/>
          <Route exact path="/allgemeineUmfrage" component={allgemeineUmfrage}/>
        </Switch>
      </Router>
    </div>
  );
};
