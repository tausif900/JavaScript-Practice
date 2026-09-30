let products = [
  { name: "Oil Filter", quantity: 45, minStock: 20, price: 500 },
  { name: "Air Filter", quantity: 12, minStock: 15, price: 800 },
  { name: "Compressor Part", quantity: 30, minStock: 25, price: 1200 },
  { name: "Oil Separator", quantity: 8, minStock: 10, price: 1500 },
  { name: "Fuel Filter", quantity: 50, minStock: 20, price: 600 },
];

// products = products.filter((p) => {
//   return p.quantity <= p.minStock;
// });

//  console.log(lowStockProducts);

products = products.map((p) => {
  return { ...p, stockValue: p.quantity * p.price };
});

// console.log(products);

//  const totalInventory = products.reduce((total, p) => {
//    return total + p.stockValue;
//  }, 0);
//  console.log(totalInventory);

// console.log(
//   products.reduce((total, p) => {
//     return total + p.stockValue;
//   }, 0),
// );

products = products.map((p) => {
  return { ...p, reorderRequired: p.quantity <= p.minStock ? true : false };
});
console.log(products);
