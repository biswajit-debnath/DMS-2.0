import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/home';
import Listing from './pages/Listing';
import Info from './pages/Info';
import SearchListing from './pages/SearchListing';


import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/DMS-2.0/" component={Home} />
        <Route  path="/DMS-2.0/listing/*" component={Listing} />
        <Route  path="/DMS-2.0/Info/" component={Info} />
        <Route  path="/DMS-2.0/searchListing/" component={SearchListing} />
      </Switch>
    </Router>
  );
};

export default App;
