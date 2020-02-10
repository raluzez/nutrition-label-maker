import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import Home from "./containers/Home/Home";
import Logout from "./containers/Auth/Logout/Logout";
import Recipes from "./containers/Recipes/Recipes";
import ProductList from "./containers/ProductsList/ProductsList";
import EditRecipe from './containers/EditRecipe/EditRecipe';
import AddProduct from './containers/AddNewProduct/AddNewProduct';
import Auth from './containers/Auth/Auth';
import LandingPage from './containers/LandingPage/LandingPage';
import { authCheckLogin } from './Store/requests/auth';

import "./App.css";

const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    dispatch(authCheckLogin())
  }, [dispatch])

    let routes = 
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path="/" exact component={LandingPage}/>
        <Redirect to="/"/>
      </Switch>

    if(token) {
      routes = 
        <Layout>
          <Switch>
            <Route path="/productlist" component={ProductList}/>
            <Route path="/recipes" component={Recipes}/>
            <Route path="/logout" component={Logout}/>
            <Route path='/editRecipe' component={EditRecipe}/>
            <Route path='/addProduct' component={AddProduct}/>
            <Route path="/createRecipe" exact component={Home}/>
            <Redirect to="/createRecipe"/>
          </Switch>
        </Layout>
    }

    return routes
}  

export default App;


