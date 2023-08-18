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

// task : Group the elements of an array based on the given function and returns the count of elements in each group.

// point : solution 1 : using reduce

const countBy = (arr, fn) => {
	return arr
		.map(typeof fn === 'function' ? fn : (val) => val[fn])
		.reduce((acc, val) => {
			acc[val] = (acc[val] || 0) + 1;
			return acc;
		}, {});
};

console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // {4: 1, 6: 2}
console.log(countBy(['one', 'two', 'three'], 'length')); // {3: 2, 5: 1}
console.log(countBy([5.13, 3.4, 4.4], Math.sqrt));
