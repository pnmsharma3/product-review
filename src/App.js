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
const API_URL='https://calm-sea-61341.herokuapp.com';
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
          <Products API_URL={API_URL}/>
          </Route>
          <Route exact path="/product/:slug">
          <ProductDetails user={user} API_URL={API_URL}/>
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
