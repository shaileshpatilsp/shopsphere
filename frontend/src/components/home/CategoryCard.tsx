import "./CategoryCard.css";

interface CategoryCardProps {
  category: string;
  isSelected: boolean;
  onClick: (category: string) => void;
}

function CategoryCard({
  category,
  isSelected,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      className={`category-card ${isSelected ? "active" : ""}`}
      onClick={() => onClick(category)}
      data-testid={`category-${category
  .toLowerCase()
  .replace(/&/g, "and")
  .replace(/\s+/g, "-")}`}
     // data-testid={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {category}
    </button>
  );
}

export default CategoryCard;
