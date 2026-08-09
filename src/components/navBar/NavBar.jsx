import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router';
import './navBar.css';
import { SearchContext } from '../../context/SearchContext';

const Navbar = () => {
  const { searchinp, setSearchinp } = useContext(SearchContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main-wrapper">
      {/* GLASSMORPHISM NAVBAR */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/" className="logo-link">
            Store<span>Hub</span>
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Product
          </NavLink>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Category
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            About
          </NavLink>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
            value={searchinp}
            onChange={(e) => setSearchinp(e.target.value.toLowerCase())}
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <NavLink to="/login" className="btn-login">Login</NavLink>
          <NavLink to="/signup" className="btn-signup">Sign Up</NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="nav-links-mobile">
          <NavLink 
            to="/" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </NavLink>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Category
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/login" 
            className="mobile-btn-login"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink 
            to="/signup" 
            className="mobile-btn-signup"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;