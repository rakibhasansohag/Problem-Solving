'use strict';
console.log('working...');

// Task : Get all the elements of an array except the last one.
const initial = (arr) => arr.slice(0, -1);
console.log(initial([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task : Get all indices of values in an array
const indexOfAll = (arr, val) =>
	arr.reduce((acc, cur, i) => (cur === val ? [...acc, i] : acc), []);

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); // Output: [0, 3]
console.log(indexOfAll([1, 2, 3], 4)); // Output: []

// Point: solution 2 :without using any built-in method
const indexOfAll1 = (arr, val) => {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			// result.push(i);
			result = [...result, i];
		}
	}

	return result;
};

console.log(indexOfAll1([1, 2, 3, 1, 2, 3], 1)); // Output: [0, 3]
console.log(indexOfAll1([1, 2, 3], 4)); // Output: []

// Task : Check if the given number falls within the given range.
const inRange = (n, start, end = null) => {
	if (end === null) return n >= start;

	if (start > end) {
		[start, end] = [end, start];
	}

	return n >= start && n < end;
};

console.log(inRange(3, 2, 5));
console.log(inRange(3, 4));
console.log(inRange(2, 3, 5));
console.log(inRange(3, 2));

// Task : Get the number of times a function executed per second.
// Point: solution 1: using setInterval
const perSecond = (fn, iterations = 100) => {
	const before = performance.now();

	for (let i = 0; i < iterations; i++) fn();

	return (1000 * iterations) / (performance.now() - before);
};

const numbers = Array(100000)
	.fill()
	.map((_, i) => i);

const sumReduce = () => numbers.reduce((acc, cur) => acc + cur, 0);

const sumForLoop = () => {
	let sum = 0;

	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
	return sum;
};

console.log(perSecond(sumReduce));
console.log(perSecond(sumForLoop));
