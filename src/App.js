import React ,{useState, useEffect }from 'react';
import './assets/style/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './Products';
import ProductDetails from './ProductDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './PrivateRoute'
function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
  }, [user]);
  
  return (
    <>
    <Header user={(user)=>setUser(user)}/>
    <Router>
    <Switch>
          <Route exact path="/">
          <Products/>
          </Route>
          <Route exact path="/product/:slug">
          <ProductDetails user={user}/>
          </Route>
          {/* <PrivateRoute path="/product/:slug">
            <ProductDetails />
            </PrivateRoute> */}
        </Switch>
    </Router>

 <Footer/>
    </>
  );
}

export default App;
