import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import Space from './components/Space';

function App() {
  return (
    <div className="app-container">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/mygrave-app-storage/:spaceName" component={Space} />
    </Switch>
  </div>
  );
}

export default App;
