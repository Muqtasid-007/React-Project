import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/navBar/NavBar';
import './landing.css';

const Landing = () => {
  return (
    <>
      <Navbar />
      <main className="landing-page">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">New season • curated picks</p>
            <h1>Shop smarter with StoreHub.</h1>
            <p className="hero-text">
              Discover top-quality products, explore fresh categories, and enjoy a smooth,
              modern shopping experience from any device.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Shop now
              </Link>
              <Link to="/categories" className="btn btn-secondary">
                Explore categories
              </Link>
            </div>
            <ul className="hero-highlights">
              <li>Fast delivery</li>
              <li>Trusted quality</li>
              <li>24/7 support</li>
            </ul>
          </div>

          <div className="hero-card">
            <p className="card-label">Best sellers</p>
            <h3>Trending this week</h3>
            <div className="card-stats">
              <div>
                <strong>4.9/5</strong>
                <span>Customer rating</span>
              </div>
              <div>
                <strong>120+</strong>
                <span>New arrivals</span>
              </div>
            </div>
            <Link to="/about" className="text-link">
              Learn more about us →
            </Link>
          </div>
        </section>

        <section className="feature-grid">
          <article className="feature-card">
            <h3>Handpicked products</h3>
            <p>Every item is selected to bring you the best quality and style.</p>
          </article>
          <article className="feature-card">
            <h3>Simple browsing</h3>
            <p>Find the right product in seconds with a clean and intuitive layout.</p>
          </article>
          <article className="feature-card">
            <h3>Built for convenience</h3>
            <p>Browse, compare, and shop seamlessly across desktop and mobile.</p>
          </article>
        </section>

        <section className="cta-banner">
          <div>
            <p className="eyebrow">Ready to explore?</p>
            <h2>Start your next favorite purchase today.</h2>
          </div>
          <Link to="/products" className="btn btn-primary">
            View products
          </Link>
        </section>
      </main>
    </>
  );
};

export default Landing;