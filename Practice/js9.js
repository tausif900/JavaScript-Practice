const employees = [
  { id: 1, name: "Tausif", department: "IT", salary: 45000 },
  { id: 2, name: "Rahul", department: "HR", salary: 35000 },
  { id: 3, name: "Aman", department: "IT", salary: 60000 },
  { id: 4, name: "Priya", department: "Sales", salary: 50000 },
  { id: 5, name: "Neha", department: "HR", salary: 40000 },
  { id: 6, name: "Arjun", department: "IT", salary: 55000 },
];

// IT department ke saare employees find karo.
console.log(
  employees.filter((e) => {
    return e.department == "IT";
  }),
);

console.log("--------------------------------------------");

// Sabhi employees ki total salary calculate karo.
console.log(
  "Total salaries are: ",
  employees.reduce((total, emp) => {
    return total + emp.salary;
  }, 0),
);

console.log("--------------------------------------------");

// Highest salary wala employee ka complete object find karo.
console.log(
  "Highest salary employee is: ",
  employees.reduce((maxSal, emp) => {
    if (maxSal.salary < emp.salary) {
      maxSal = emp;
    }
    return maxSal;
  }, employees[0]),
);

// Har department mein kitne employees hain, count karo.
let count = {};
console.log(
  employees.reduce((count, emp) => {
    if (count[emp.department]) {
      count[emp.department]++;
    } else {
      count[emp.department] = 1;
    }
    return count;
  }, {}),
);
