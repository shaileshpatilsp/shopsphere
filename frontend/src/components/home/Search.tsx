import { useState } from "react";
import "./Search.css";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <section className="search-section" data-testid="search-section">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        data-testid="search-input"
      />

      <button
        onClick={handleSearch}
        data-testid="search-button"
      >
        Search
      </button>
    </section>
  );
}

export default Search;