import "./ProductGrid.css";
import ProductCard from "./ProductCard";
import type { Product } from "../../data/products";
interface ProductGridProps {
  products: Product[];
}

function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div
        className="no-products"
        data-testid="no-products-message"
      >
        No products found.
      </div>
    );
  }

  return (
    <section
      className="product-grid"
      data-testid="product-grid"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
    </section>
  );
}

export default ProductGrid;