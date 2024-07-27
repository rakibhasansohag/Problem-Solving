'use strict';
console.log('working...');

// Task : Calculate how many numbers in the given array are less or equal to the given value using the percentile formula.

// Point : solution 1 : using filter
const percentile = (arr, num) =>
	(arr.filter((item) => item <= num).length / arr.length) * 100;

console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
console.log(percentile([1, 2, 3, 4, 5, 6], 4).toFixed(2)); // 66.66;

const percentile1 = (arr, num) => {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < num) {
			count++;
		}

		if (arr[i] === num) {
			return (count / arr.length) * 100;
		}
	}

	return (count / arr.length) * 100;
};

console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
console.log(percentile([1, 2, 3, 4, 5, 6], 4).toFixed(2)); // 66.66;

// Task : Create a function that invokes fn with partials appended to the arguments it receives.
const partialRight =
	(fn, ...partials) =>
	(...args) =>
		fn(...args, ...partials);

console.log(partialRight(Math.max, 1, 2, 3)(4));
console.log(partialRight(Math.min, 1, 2, 3)(4));

const greet = (greeting, name) => greeting + ' ' + name + '!';

const greatRakib = partialRight(greet, 'Rakib');
console.log(greatRakib('Hello'));
