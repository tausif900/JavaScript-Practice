// Destructuring
const employee = {
  name: "Tausif",
  age: 20,
  department: "IT",
  salary: 30000,
};

// destructuring name and department
const { name, department } = employee;
console.log(name, department);

// assigning new variable to salary while destructuring
const { salary: monthlySalary } = employee;
console.log(monthlySalary);

// setting default value to a property
const { age = 18 } = employee;
console.log(age);
