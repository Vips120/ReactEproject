import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Signup from './components/navigation/signup/signup';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Switch>
        <Route path="/signup" exact component={Signup}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
