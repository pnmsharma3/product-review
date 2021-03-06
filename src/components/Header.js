import React, { useState, useEffect } from 'react';
import logo from '../assets/image/cafe.png';

const Header = (props) => {
  const [isLogedIn, setIsLogedIn] = useState(false)

  useEffect(() => {
    let user = localStorage.getItem('user');
    setIsLogedIn(user && !!user.length?true:false)
  }, []);

  const handleUserAuth = () => {
    let user = {
      "name": "test user",
      "email": "test@gmail.com",
      "createdAt": "2020-05-29T15:29:32.019Z",
      "_id": "cMY5BpviAi3ZnkHc"
  }
    if (!isLogedIn) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsLogedIn(true);
      props.user(user);
    } else {
      localStorage.clear();
      setIsLogedIn(false);
      props.user(null);
    }
  }

  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="logo" src={logo} />
          </a>
          <button className="btn btn-warning" onClick={() => handleUserAuth()}>{isLogedIn ? 'Logout' : 'Login'} </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;