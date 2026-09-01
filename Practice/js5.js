const employees = [
  { name: "Tausif", salary: 45000 },
  { name: "Saif", salary: 65000 },
  { name: "Rahul", salary: 55000 },
  { name: "Aman", salary: 40000 },
];

const emp = employees.filter((emp) => {
  return emp.salary > 50000;
});

emp.forEach((e) => {
  console.log(e.name);
});
