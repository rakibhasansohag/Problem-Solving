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
// runPromiseInSeries([
//   () => delay(1000),
//   () => delay(2000),
//   () => delay(3000),
// ]).then(console.log);

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

// Task : Clear up the chaos behind these strings.("  Hello World!  ")
// Point : solution 1 - using regex
const clearUp = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

console.log(clearUp("  Hello World!  "));

// Point : solution 2 - using replace
const clearUp1 = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

console.log(clearUp1("  Hello World!  "));

// Task : Return the next higher prime number.
// Point : solution 1- using prime number

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 2) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const nextHigherPrime = (n) => {
  for (let i = n + 1; ; i += 2) {
    if (isPrime(i)) {
      return i;
    }
  }
};

console.log(nextHigherPrime(10));

// Task :Write a JavaScript program to reverse the order of characters in the string.
// Point : solution 1 : using array reverse method
const reverseString = (str) => [...str].reverse().join("");

console.log(reverseString("Hello World!"));
console.log(reverseString("I love javaScript!"));

// Point : solution 2 : using for loop
const reverseString1 = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return result;
};

console.log(reverseString1("Hello World!"));
console.log(reverseString1("I love javaScript!"));
console.log("------------------ another problem ------------------");

// Task : Write a JavaScript program to create an object composed of the properties the given function returns false for. The function is invoked with two arguments: (value and key).

// Point : solution 1 - using obj keys
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omitBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number")); // Output: { b: '2' }

// Point : solution 2 - using for loop
const omitBy1 = (obj, fn) => {
  const result = {};

  for (const key in obj) {
    if (!fn(obj[key], key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

console.log(omitBy1({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"));

// Task :Write a JavaScript program that takes a predicate and an array, like Array.filter(), but only keeps x if pred(x) returns false.
// Point : solution 1 - using array filter method
const reject = (pred, array) => array.filter((...args) => !pred(...args));
console.log(reject((x) => x % 2 === 0, [1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(
  reject((word) => word.length > 4, ["Apple", "Pear", "Kiwi", "Banana"])
); // Output: ['Pear', 'Kiwi']

// Point : solution 1 : using for loop
const reject1 = (pred, array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (!pred(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(reject1((x) => x % 2 === 0, [1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(
  reject1((word) => word.length > 4, ["Apple", "Pear", "Kiwi", "Banana"])
); // Output: ['Pear', 'Kiwi']
