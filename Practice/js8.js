const products = [
  { id: 1, title: "Laptop", price: 899, category: "electronics" },
  { id: 2, title: "Smartphone", price: 599, category: "electronics" },
  { id: 3, title: "T-Shirt", price: 25, category: "clothing" },
  { id: 4, title: "Headphones", price: 120, category: "electronics" },
  { id: 5, title: "Jeans", price: 45, category: "clothing" },
  { id: 6, title: "Watch", price: 150, category: "accessories" },
  { id: 7, title: "Keyboard", price: 75, category: "electronics" },
  { id: 8, title: "Shoes", price: 80, category: "footwear" },
  { id: 9, title: "Mouse", price: 30, category: "electronics" },
  { id: 10, title: "Backpack", price: 60, category: "accessories" },
];

// Cheapest Products
const cheapestPrice = products.reduce((cheap, p) => {
  if (p.price < cheap.price) {
    cheap = p;
  }
  return cheap;
}, products[0]);

console.log(cheapestPrice);

// products whose price is greater than 50
const productsGreaterThan50 = products.filter((p) => {
  return p.price > 50;
});

console.log(productsGreaterThan50);

// Count products in each category
const countsOfEachCategory = products.reduce((acc, p) => {
  if (acc[p.category]) {
    acc[p.category]++;
  } else {
    acc[p.category] = 1;
  }
  return acc;
}, {});
console.log(countsOfEachCategory);
