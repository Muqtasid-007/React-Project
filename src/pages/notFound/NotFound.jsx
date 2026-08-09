import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../../components/navBar/NavBar'
import './notFound.css'

const NotFound = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleBackHome = () => {
    navigate('/')
  }

  const handleQuickLink = (path) => {
    navigate(path)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`)
    }
  }

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Categories', path: '/categories' },
    { label: 'About Us', path: '/about' },
  ]

  return (
    <>
      <Navbar />
      
      <div className="not-found-container">
        {/* Floating Background Elements */}
        <div className="floating-element float-1"></div>
        <div className="floating-element float-2"></div>
        <div className="floating-element float-3"></div>

        {/* Main 404 Content */}
        <div className="not-found-content">
          {/* Creative 404 Graphic */}
          <div className="error-graphic">
            <div className="error-number">404</div>
            <div className="error-animation">
              <div className="astronaut">🚀</div>
              <div className="planet">🌍</div>
            </div>
          </div>

          {/* Error Message */}
          <div className="error-message">
            <h1 className="error-title">Oops! Page Lost in Space</h1>
            <p className="error-description">
              We can't seem to find the page you're looking for. Don't worry, it happens to the best of us!
            </p>
          </div>

          {/* Search Bar */}
          <form className="search-section" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input-404"
              placeholder="Search for products, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
          </form>

          {/* CTA Button */}
          <button className="cta-button" onClick={handleBackHome}>
            ← Back to Home
          </button>

          {/* Quick Links */}
          <div className="quick-links-section">
            <p className="quick-links-title">Quick Navigation</p>
            <div className="quick-links">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  className="quick-link-btn"
                  onClick={() => handleQuickLink(link.path)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound;