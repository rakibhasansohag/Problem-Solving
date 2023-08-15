'use strict';
console.log('working...');

// task : Accepts a converging function and a list of branching functions.

// Returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

// Example: higher-order functions

const converge =
	(converger, fns) =>
	(...args) =>
		converger(...fns.map((fn) => fn.apply(null, args)));

const average = converge(
	(a, b) => a / b,
	[(arr) => arr.reduce((a, v) => a + v, 0), (arr) => arr.length],
);

console.log(average([6, 7])); // 6.5
console.log(average([1, 2, 3, 4, 5, 6, 7, 8])); // 4.5
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 5
