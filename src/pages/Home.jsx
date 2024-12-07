import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Stylish Threads</h1>
          <p>Discover the latest fashion trends and shop your favorite styles.</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="collection-section collection-1">
        <div className="collection-content">
          <h2>Autumn Collection</h2>
          <p>Sophisticated coats and outerwear for the season</p>
          <Link to="/products" className="collection-link">View Collection</Link>
        </div>
      </section>

      <section className="collection-section collection-2">
        <div className="collection-content">
          <h2>Street Style</h2>
          <p>Casual comfort meets urban fashion</p>
          <Link to="/products" className="collection-link">Explore More</Link>
        </div>
      </section>

      <section className="collection-section collection-3">
        <div className="collection-content">
          <h2>Evening Wear</h2>
          <p>Elegant pieces for special occasions</p>
          <Link to="/products" className="collection-link">Shop Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;



