import { useState } from "react";

import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Search from "./components/home/Search";
import CategoryList from "./components/home/CategoryList";
import ProductGrid from "./components/home/ProductGrid";
import FeaturedProducts from "./components/home/FeaturedProducts"; // make sure this exists

import { products } from "./data/products";
import Footer from "./components/layout/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // 👇 new constant
  const hasActiveFilters =
    searchTerm.trim() !== "" || selectedCategory !== "All";

  return (
    <>
      <Header />
      <Hero />

      <Search onSearch={handleSearch} />

      <CategoryList
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      <ProductGrid products={filteredProducts} />

      {/* 👇 conditionally render FeaturedProducts */}
      {!hasActiveFilters && <FeaturedProducts />}
      <Footer />
    </>
  );
}

export default App;
