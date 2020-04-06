import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './component/store';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Step1 from './component/container/step1';
import Submit from './component/container/step2';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div style={{ backgroundColor: '#b31b1b', width: '100%', height: 40 }} />
          <Grid>
            <h4>Meeting Room Booking</h4>
          </Grid>
          <Switch>
            <Route path="/" component={Step1} exact />
            <Route path="/step-2" component={Submit} />
          </Switch>
        </header>
      </div>
    </Provider>
  );
}

export default App;
