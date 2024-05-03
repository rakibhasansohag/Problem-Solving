"use strict";
console.log("working...");

// Task : Write a JavaScript program to get a random element from an array.
// Point: using Math.random() method and Array Method
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

console.log(random([3, 7, 9, 11]));
console.log(
  random([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);

// Point: solution 2 - using Math.random() method
const random2 = (arr) => arr[Math.round(Math.random() * arr.length)];
console.log(random2([3, 7, 9, 11]));
console.log(
  random2([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);

// Task : Write a JavaScript program to run a given array of promises in series.
// Point : solution 1 using Promise all
const runPromiseInSeries = (arr) => Promise.all(arr);
const delay = (d) => new Promise((r) => setTimeout(r, d));
runPromiseInSeries([
  () => delay(1000),
  () => delay(2000),
  () => delay(3000),
]).then(console.log);

console.log("before promise");
Promise.resolve().then(() => console.log("after promise"));

// Task : Write a JavaScript program to round a number to a specified amount of digits.
// Point : solution 1 - using Math.round()
const round = (n, decimals = 0) => {
  const power = Math.pow(10, decimals);
  return Math.round(n * power) / power;
};

console.log(round(1.005, 2)); // Output: 1.01
console.log(round(1.05, 2)); // Output: 1.05
console.log(round(1.0005, 2)); // Output: 1

// Point: solution 2  using -ternary operator
const round1 = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

console.log(round(1.005, 2)); // Output: 1.01
console.log(round(1.05, 2)); // Output: 1.05
console.log(round(1.0005, 2)); // Output: 1
