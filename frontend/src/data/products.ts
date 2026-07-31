export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  // 6–8 sample products



   { id: 1, name: "Laptop", price: 25.99, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 79.99, category: "Electronics" },
  { id: 3, name: "Running Shoes", price: 59.99, category: "Footwear" },
  { id: 4, name: "Water Bottle", price: 14.99, category: "Accessories" },
  { id: 5, name: "Bluetooth Headphones", price: 99.99, category: "Electronics" },
  { id: 6, name: "Notebook", price: 4.99, category: "Stationery" },
  { id: 7, name: "Backpack", price: 39.99, category: "Accessories" },
  { id: 8, name: "Smartwatch", price: 199.99, category: "Electronics" },
  
];