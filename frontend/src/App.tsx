import { useState } from "react";

import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Search from "./components/home/Search";
import ProductGrid from "./components/home/ProductGrid";

import { products } from "./data/products";
import type { Product } from "./data/products";

function App() {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(products);

  const handleSearch = (searchTerm: string) => {
    const value = searchTerm.trim().toLowerCase();

    if (!value) {
      setFilteredProducts(products);
      return;
    }

    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
    );

    setFilteredProducts(results);
  };

  return (
    <>
      <Header />
      <Hero />
      <Search onSearch={handleSearch} />
      <ProductGrid products={filteredProducts} />
    </>
  );
}

export default App;