import "./Header.css";

function Header() {
  return (
    <header className="header" data-testid="header">
      <div className="header-top">
        <div className="logo" data-testid="logo">
          ShopSphere
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            data-testid="search-input"
            aria-label="Search products"
          />
        </div>

        <div className="header-actions">
          <button
            className="action-button"
            data-testid="login-button"
          >
            Login
          </button>

          <button
            className="action-button"
            data-testid="cart-button"
          >
            🛒 Cart
          </button>
        </div>
      </div>

      <nav className="navbar" aria-label="Main Navigation">
        <ul className="nav-links">
          <li><a href="#" data-testid="nav-home">Home</a></li>
          <li><a href="#" data-testid="nav-products">Products</a></li>
          <li><a href="#" data-testid="nav-deals">Deals</a></li>
          <li><a href="#" data-testid="nav-about">About</a></li>
          <li><a href="#" data-testid="nav-contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;