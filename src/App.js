import React, { Component} from 'react';
import { connect } from "react-redux";
import Layout from "./components/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import Logout from "./containers/Auth/Logout/Logout";
import Recipes from "./containers/Recipes/Recipes";
import ProductList from "./containers/ProductsList/ProductsList";
import * as actions from "./Store/actions";
import "./App.css";

class App extends Component {

    componentDidMount() {
      this.props.onAutoSignin()
    };
    
    render (){

    let routes = 
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect to="/"/>
      </Switch>

    if(this.props.token) {
      routes = 
          <Switch>
            <Route path="/productlist" component={ProductList}/>
            <Route path="/recipes" component={Recipes}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/" exact component={Home}/>
            <Redirect to="/"/>
          </Switch>
    }

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
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


