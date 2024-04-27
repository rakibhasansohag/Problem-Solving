"use strict ";
console.log("working...");
// Task :Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.

// Point : solution 1 - using spread operator and

const spreadOver = (fn) => (arr) => fn(...arr);

const array = [1, 2, 3, 4, 5];

const add = (a, b) => a + b;
const arrayMax = spreadOver(Math.max);
// The spread operator '...' is used to spread the elements of the array. In this case, it spreads the array [1, 2, 3, 4, 5].
// The add function takes two arguments, 'a' and 'b'. When the spreadOver function is called with the array, it passes each element of the array as an argument to the add function.
// In this case, the add function is called three times with the arguments 1, 2, 3, respectively. So, the result of the spreadOver function call is add(1, 2) + add(2, 3) + add(3, 4), which equals 3.
// Therefore, the final output is 3.

console.log(spreadOver(add)(array)); ///  3
console.log(arrayMax(array)); ///  5

