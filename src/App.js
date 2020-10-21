import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Signup from './components/navigation/signup/signup';
import Signin from "./components/navigation/signin/signin.component";
import {Route, Switch} from "react-router-dom";
import Home from './components/navigation/home/home.component';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Switch>
      <Route path="/" exact component={Signin}/>
      <Route path="/home" exact component={Home}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/signin" exact component={Signin}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
