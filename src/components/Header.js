import React, { useState, useEffect } from 'react';
import logo from '../assets/image/cafe.png';

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false)

  useEffect(() => {
    let user = localStorage.getItem('user');
    setIsLogedIn(!!user.length)
  }, []);

  const handleUserAuth = () => {
    let user = {
      name: 'Mr User',
      id: '',
      token: ''
    }
    if (!isLogedIn) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsLogedIn(true)
    } else {
      localStorage.clear();
      setIsLogedIn(false)
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