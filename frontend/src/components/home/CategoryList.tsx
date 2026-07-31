import "./CategoryList.css";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";

interface CategoryListProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

function CategoryList({
  selectedCategory,
  onCategorySelect,
}: CategoryListProps) {
  return (
    <section
      className="category-list"
      data-testid="category-list"
    >
      {categories.map((category) => (
        <CategoryCard
          key={category}
          category={category}
          isSelected={selectedCategory === category}
          onClick={onCategorySelect}
        />
      ))}
    </section>
  );
}

export default CategoryList;