import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router';
import './navBar.css';
import { SearchContext } from '../../context/SearchContext';


const Navbar = () => {
  const { searchinp, setSearchinp } = useContext(SearchContext);
  return (
    <div className="main-wrapper">

      {/* 1. NAVBAR */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">Store<span>Hub</span></NavLink>
        </div>

        {/* Links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Product</NavLink>
          <NavLink to="/categories" className={({ isActive }) => isActive ? "active" : ""}>Category</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        </div>

        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search..."
            value={searchinp}
            onChange={(e) => setSearchinp(e.target.value.toLowerCase())}
          />
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <NavLink to="/login" className="btn-login">Login</NavLink>
          <NavLink to="/signup" className="btn-signup">Sign Up</NavLink>
        </div>
      </nav>

    </div>
  );

 
  

  }

export default Navbar;