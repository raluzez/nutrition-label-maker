import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import firebase from "firebase";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import productListReducer from "./Store/reducers/productsList";
import recipeReducer from "./Store/reducers/recipe";
import authReducer from "./Store/reducers/auth";

const rootReducer = combineReducers({
  productList: productListReducer,
  recipe: recipeReducer,
  auth: authReducer
});

const store = createStore(rootReducer ,applyMiddleware(thunk));

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN
});

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
