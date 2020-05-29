import React from 'react';
import logo from './logo.svg';
import './assets/style/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './Products';
import ProductDetails from './ProductDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './PrivateRoute'
function App() {
  return (
    <>
    <Header/>
    <Router>
    <Switch>
          <Route exact path="/">
          <Products/>
          </Route>
          <PrivateRoute path="/product/:slug">
            <ProductDetails />
            </PrivateRoute>
        </Switch>
    </Router>

 <Footer/>
    </>
  );
}

export default App;
