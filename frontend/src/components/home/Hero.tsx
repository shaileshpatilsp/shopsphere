import "./Hero.css";

function Hero() {
  return (
    <section className="hero" data-testid="hero-section">
      <div className="hero-content">
        <h1 data-testid="hero-title">
          Welcome to ShopSphere
        </h1>

        <p data-testid="hero-description">
          Discover amazing products at unbeatable prices.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            data-testid="shop-now-button"
          >
            Shop Now
          </button>

          <button
            className="secondary-btn"
            data-testid="browse-categories-button"
          >
            Browse Categories
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;