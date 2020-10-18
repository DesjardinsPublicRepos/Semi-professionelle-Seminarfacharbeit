import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import landingPage from './pages/landingPage';
import schuelerumfrage from './pages/schuelerumfrage';
import allgemeineUmfrage from './pages/allgemeineUmfrage';
import Bottom from './components/bottom';

export default () => {
  return (
    <div className="App" style={{ "margin": "3%", "bottom": "0" }}>
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
