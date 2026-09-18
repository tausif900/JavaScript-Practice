const employees = [
  { id: 1, name: "Tausif", salary: 45000, department: "IT" },
  { id: 2, name: "Rahul", salary: 35000, department: "HR" },
  { id: 3, name: "Aman", salary: 50000, department: "IT" },
];

console.log(
  employees.map((e, i) => {
    if (i === 1) {
      return { ...e, salary: 40000 };
    } else {
      return e;
    }
  }),
);

console.log("-------------------------------------------");

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2000 },
];

console.log(
  products.map((p) => {
    if (p.id === 2) {
      return { ...p, price: 1200 };
    } else {
      return p;
    }
  }),
);
