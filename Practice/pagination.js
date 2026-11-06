const offers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let startingIndex = (1 - 1) * 5;
console.log(startingIndex);

let endingIndex = (startingIndex + 1) * 5;
console.log(endingIndex);

const currentFlights = offers.slice(startingIndex, endingIndex);
console.log(currentFlights);

currentFlights.map((f) => {
  return console.log(f);
});
