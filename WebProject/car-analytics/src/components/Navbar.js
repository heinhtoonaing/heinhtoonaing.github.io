import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Car Analytics</h1>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/highlighted-cars">Highlighted Cars</Link>
      </div>
    </nav>
  );
};

export default Navbar;
