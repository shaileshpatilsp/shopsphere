export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  // Electronics
  { id: 1, name: "Laptop", price: 54999, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 29999, category: "Electronics" },
  { id: 3, name: "Bluetooth Headphones", price: 3999, category: "Electronics" },
  { id: 4, name: "Smartwatch", price: 7999, category: "Electronics" },
  { id: 5, name: "Power Bank", price: 1499, category: "Electronics" },

  // Accessories
  { id: 6, name: "Backpack", price: 1999, category: "Accessories" },
  { id: 7, name: "Water Bottle", price: 499, category: "Accessories" },
  { id: 8, name: "Sunglasses", price: 1299, category: "Accessories" },

  // Footwear
  { id: 9, name: "Running Shoes", price: 3499, category: "Footwear" },
  { id: 10, name: "Sneakers", price: 2999, category: "Footwear" },
  { id: 11, name: "Sandals", price: 1499, category: "Footwear" },

  // Stationery
  { id: 12, name: "Notebook", price: 199, category: "Stationery" },
  { id: 13, name: "Pen Set", price: 299, category: "Stationery" },
  { id: 14, name: "Desk Organizer", price: 799, category: "Stationery" },

  // Home & Kitchen
  { id: 15, name: "Coffee Maker", price: 4499, category: "Home & Kitchen" },
  { id: 16, name: "Electric Kettle", price: 1799, category: "Home & Kitchen" },
  { id: 17, name: "Table Lamp", price: 999, category: "Home & Kitchen" },

  // Books
  { id: 18, name: "Clean Code", price: 699, category: "Books" },
];