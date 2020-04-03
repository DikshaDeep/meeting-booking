import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './component/container/login';
import Home from './component/container/home';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
