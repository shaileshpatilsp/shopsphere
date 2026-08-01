import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-content">
        {/* Brand */}
        <section className="footer-brand" data-testid="footer-brand">
          <h2 data-testid="footer-logo">ShopSphere</h2>
          <p data-testid="footer-description">
            Your one-stop destination for quality products and unbeatable deals.
          </p>
        </section>

        {/* Quick Links */}
        <nav
          className="footer-section"
          aria-label="Quick Links"
          data-testid="footer-quick-links"
        >
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#" data-testid="footer-link-home">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-products">
                Products
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-deals">
                Deals
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-about">
                About
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Customer Support */}
        <nav
          className="footer-section"
          aria-label="Customer Support"
          data-testid="footer-support"
        >
          <h3>Customer Support</h3>
          <ul>
            <li>
              <a href="#" data-testid="footer-link-help">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-shipping">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-returns">
                Returns &amp; Refunds
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-privacy">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        {/* Follow Us */}
        <nav
          className="footer-section"
          aria-label="Follow Us"
          data-testid="footer-social"
        >
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#" data-testid="footer-link-facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-linkedin">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="footer-bottom" data-testid="footer-copyright">
        <p>&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;