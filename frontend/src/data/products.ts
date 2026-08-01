export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  // Electronics
  { id: 1, name: "Laptop", price: 54999, category: "Electronics",featured: true },
  { id: 2, name: "Smartphone", price: 29999, category: "Electronics" ,featured: true},
  { id: 3, name: "Bluetooth Headphones", price: 3999, category: "Electronics",featured: true },
  { id: 4, name: "Smartwatch", price: 7999, category: "Electronics",featured: true },
  { id: 5, name: "Power Bank", price: 1499, category: "Electronics" ,featured: true},

  // Accessories
  { id: 6, name: "Backpack", price: 1999, category: "Accessories",featured: true },
  { id: 7, name: "Water Bottle", price: 499, category: "Accessories",featured: true },
  { id: 8, name: "Sunglasses", price: 1299, category: "Accessories",featured: true },

  // Footwear
  { id: 9, name: "Running Shoes", price: 3499, category: "Footwear",featured: true },
  { id: 10, name: "Sneakers", price: 2999, category: "Footwear" ,featured: true},
  { id: 11, name: "Sandals", price: 1499, category: "Footwear",featured: true },

  // Stationery
  { id: 12, name: "Notebook", price: 199, category: "Stationery" ,featured: true},
  { id: 13, name: "Pen Set", price: 299, category: "Stationery" ,featured: true},
  { id: 14, name: "Desk Organizer", price: 799, category: "Stationery" ,featured: true},

  // Home & Kitchen
  { id: 15, name: "Coffee Maker", price: 4499, category: "Home & Kitchen",featured: true },
  { id: 16, name: "Electric Kettle", price: 1799, category: "Home & Kitchen",featured: true },
  { id: 17, name: "Table Lamp", price: 999, category: "Home & Kitchen" ,featured: true},

  // Books
  { id: 18, name: "Clean Code", price: 699, category: "Books",featured: true },
];