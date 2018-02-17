import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import HomeContainer from './Home/Container/HomeContainer'
import DataContainer from './Data/Container/DataContainer'

import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/data" component={DataContainer}/>
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  </div>
);


export default App;