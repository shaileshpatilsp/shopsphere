import "./ProductCard.css";

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
}

function ProductCard({
  name,
  price,
  category,
}: ProductCardProps) {
  return (
    <div className="product-card" data-testid="product-card">
      <div className="product-image">
        📦
      </div>

      <h3 data-testid="product-name">
        {name}
      </h3>

      <p data-testid="product-category">
        {category}
      </p>

      <p className="price" data-testid="product-price">
        ₹{price}
      </p>

      <button
        className="add-cart-btn"
        data-testid="add-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;