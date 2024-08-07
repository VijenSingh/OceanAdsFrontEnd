import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
 

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/api/save-client-data">Send DATA</Link>
      <Link to="/api/login">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;