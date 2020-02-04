import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Layout from "./components/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import Logout from "./containers/Auth/Logout/Logout";
import Recipes from "./containers/Recipes/Recipes";
import ProductList from "./containers/ProductsList/ProductsList";
import EditRecipe from './containers/EditRecipe/EditRecipe';
import AddProduct from './containers/AddNewProduct/AddNewProduct';
import Auth from './containers/Auth/Auth';
import LandingPage from './containers/LandingPage/LandingPage';
import * as actions from "./Store/actions";
import "./App.css";


const App = (props) => {

  const { onAutoSignin, token } = props

  useEffect(() => {
    onAutoSignin();
  }, [onAutoSignin])

    let routes = 
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path="/" exact component={LandingPage}/>
        <Redirect to="/"/>
      </Switch>

    if(token) {
      routes = 
          <Switch>
            <Route path="/productlist" component={ProductList}/>
            <Route path="/recipes" component={Recipes} style={{backgroundColor:'#eee'}}/>
            <Route path="/logout" component={Logout}/>
            <Route path='/editRecipe' component={EditRecipe}/>
            <Route path='/addProduct' component={AddProduct}/>
            <Route path="/createRecipe" exact component={Home}/>
            <Redirect to="/createRecipe"/>
          </Switch>
    }

    return (
      <Layout>
        {routes}
      </Layout>
    );
}  

const mapStateToProps = state => {
  return {
      token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoSignin: () => dispatch(actions.authCheckLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


