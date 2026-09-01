// Q2 — Fruit Frequency

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = {};

for (let i = 0; i < fruits.length; i++) {
  if (count[fruits[i]]) {
    count[fruits[i]]++;
  } else {
    count[fruits[i]] = 1;
  }
}

console.log(count);
