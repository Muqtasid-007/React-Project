import React from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../../components/navBar/NavBar'
import './notFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  const handleBackHome = () => {
    navigate('/')
  }

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

          {/* CTA Button */}
          <button className="cta-button" onClick={handleBackHome}>
            ← Back to Home
          </button>
        </div>
      </div>
    </>
  )
}

export default NotFound;