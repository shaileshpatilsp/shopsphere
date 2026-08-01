import "./FeaturedProducts.css";

import ProductGrid from "./ProductGrid";
import { products } from "../../data/products";

function FeaturedProducts() {

  const featuredProducts = products.slice(0, 4);

  return (
    <section
      className="featured-products"
      data-testid="featured-products"
    >
      <h2 data-testid="featured-title">
           Featured Products
    </h2>

      <ProductGrid products={featuredProducts} />
    </section>
  );
}

export default FeaturedProducts;