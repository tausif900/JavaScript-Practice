// Given an array of numbers, find the second largest number without using sort().

const numbers = [10, 45, 23, 89, 80, 89, 90, 34];

let largestNumber = numbers[0];
let secondLargest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    secondLargest = largestNumber;
    largestNumber = numbers[i];
  } else if (numbers[i] > secondLargest && numbers[i] < largestNumber) {
    secondLargest = numbers[i];
  }
}

console.log("Second Largest Number is: ", secondLargest);
