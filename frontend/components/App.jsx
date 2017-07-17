import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch } from 'react-router-dom';
const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    <Switch>
    <Route path='/login' component={SessionFormContainer}/>
    </Switch>
  </div>
);

export default App;
