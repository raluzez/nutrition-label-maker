import React, { Component } from 'react';
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";
import Recipes from "./containers/Recipes/Recipes";
import ProductList from "./containers/ProductsList/ProductsList";


class App extends Component {

  render (){
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/productlist" component={ProductList}/>
          <Route path="/recipes" component={Recipes}/>
          <Route path="/" exact component={Home}/>
          <Redirect to="/"/>
        </Switch>
      </Layout>
    );
  }  
}

export default App;

// this is only routes page with layout.

