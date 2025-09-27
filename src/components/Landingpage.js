import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Nnasly Farms</h1>
          <p>
            Fresh, healthy, and locally raised livestock, meat, and eggs —
            straight from our farm to your table.
          </p>
          <button className="cta-btn">Shop Now</button>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <Link to="/livestock" className="product-card">
            <div className="icon">🐖</div>
            <h3>Livestock</h3>
            <p>Healthy pigs, goats, and chickens raised with care.</p>
          </Link>

          <Link to="/meat" className="product-card">
            <div className="icon">🥩</div>
            <h3>Fresh Meat</h3>
            <p>Premium quality beef, pork, and poultry meat.</p>
          </Link>

          <Link to="/eggs" className="product-card">
            <div className="icon">🥚</div>
            <h3>Organic Eggs</h3>
            <p>Farm-fresh eggs, rich in nutrients and taste.</p>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          At Nnasly Farms, we believe in sustainable farming practices and
          providing our customers with the highest quality livestock, meat, and
          eggs. Everything we sell is naturally raised and ethically sourced.
        </p>
        <button className="cta-btn">Learn More</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Nnasly Farms. All rights reserved.</p>
      </footer>
    </div>
  );
}
