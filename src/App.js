import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Signup from './components/navigation/signup/signup';
import Signin from "./components/navigation/signin/signin.component";
import {Route, Switch} from "react-router-dom";
import Home from './components/navigation/home/home.component';
import shopProductComponent from './components/navigation/shop/shop.product.component';
import Cart from './components/navigation/cart/cart';
import PrivateRoute from "./shared/helpers/private.route";
function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
      <PrivateRoute path="/" exact component={Home}/>
      <PrivateRoute path="/home" exact component={Home}/>
      <Route path="/shopproduct/:id" exact component={shopProductComponent}/>
      <Route path="/cart" exact component={Cart}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/signin" exact component={Signin}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
