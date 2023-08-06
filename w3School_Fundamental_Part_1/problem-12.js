'use strict';
console.log('working....');

/*
task : Write a JavaScript program to curry (curries) a function

/According to wiki.haskell.org "Currying is the process of transforming a function that takes multiple arguments into a function that takes just a single argument and returns another function if any arguments are still needed. f x y = g (x,y), however the curried form is usually more convenient because it allows partial application.

Note: Use recursion. If the number of provided arguments (args) is sufficient, call the passed function fn. Otherwise, return a curried function fn that expects the rest of the arguments. If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. Math.min()), you can optionally pass the number of arguments to the second parameter arity.

*/

// point  solution 1 - using recursion

const curry = (fn, arity = fn.length, ...args) => {
	return arity <= args.length
		? fn(...args)
		: curry.bind(null, fn, arity, ...args);
};

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6

console.log(curriedSum(1)(2, 3)); // 6

// point  solution 2 - using double function

const curry2 = (fn, arity = fn.length, ...args) => {
	return arity <= args.length
		? fn(...args)
		: function (...args2) {
				return curry2(fn, arity, ...args, ...args2);
		  };
};

console.log(curry2(Math.pow)(2)(8)); // 6
console.log(curry2(Math.min, 3)(10)(50)(2)); // 2

console.log('------------------ another problem ------------------');

// task : Perform a deep comparison between two values to determine if they are equivalent.

// / Note: Check if the two values are identical, if they are both Date objects with the same time, using Date.getTime() or if they are both non-object values with an equivalent value (strict comparison). Check if only one value is null or undefined or if their prototypes differ. If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys, then use Array.every() to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.

// point  solution 1 - using recursion

const deepEqual = (a, b) => {
	if (a === b) return true;

	if (a instanceof Date && b instanceof Date)
		return a.getTime() === b.getTime();

	if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
		return a === b;

	if (a.prototype !== b.prototype) return false;

	if (a === null || b === null || a === undefined || b === undefined)
		return false;

	let keys = Object.keys(a);
	if (keys.length !== Object.keys(b).length) return false;

	return keys.every((key) => deepEqual(a[key], b[key]));
};

console.log(
	deepEqual(
		{ a: [2, { e: 3 }], b: [4], c: 'foo' },
		{ a: [2, { e: 3 }], b: [4], c: 'foo' },
	),
); // true

// point  solution 2 - using JSON.stringify()

const deepEqual2 = (a, b) => {
	if (a === b) return true;

	if (a instanceof Date && b instanceof Date)
		return a.getTime() === b.getTime();

	if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
		return a === b;

	if (a.prototype !== b.prototype) return false;

	if (a === null || b === null || a === undefined || b === undefined)
		return false;

	return JSON.stringify(a) === JSON.stringify(b);
};

console.log(deepEqual2({ a: [2, 3], b: [4] }, { a: [2, 3], b: [4] })); // true

// point  solution 3 - using lodash

const _ = require('lodash');

const deepEqual3 = (a, b) => _.isEqual(a, b);

console.log(deepEqual3({ a: [2, 3], b: [4] }, { a: [2, 3], b: [4] })); // true
