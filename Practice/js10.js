let numbers = [10, 20, 30, 40];

numbers = [...numbers, 50];

console.log(numbers);

console.log("-----------------------------------");

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Java", "Spring Boot", "MySQL"];

const skills = [...frontend, ...backend];
console.log(skills);

console.log("-----------------------------------");

let user = {
  name: "Tausif",
  age: 24,
  city: "Mumbai",
};
user = { ...user, age: 25 };
console.log(user);
