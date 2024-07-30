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

// Task : Parse a HTTP Cookie header string and return an object of all cookie name-value pairs.

// Point : solution 1 : using split, map and reduced
const parseCookie = (str) =>
	str
		.split(';')
		.map((value) => value.split('='))
		.reduce((acc, cur) => {
			acc[decodeURIComponent(cur[0].trim())] = decodeURIComponent(
				cur[1].trim(),
			);
			return acc;
		}, {});

console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));
console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2').equation);

// Point : solution 2 : without using any  built in functions
const parseCookie1 = (str) => {
	let obj = {};
	let keyValuePairs = str.split(';');

	for (let i = 0; i < keyValuePairs.length; i++) {
		let [key, value] = keyValuePairs[i].split('=');
		obj[key.trim()] = decodeURIComponent(value ? value.trim() : '');
	}

	return obj;
};

console.log(parseCookie1('foo=bar; equation=E%3Dmc%5E2'));
console.log(parseCookie1('foo=bar; equation=E%3Dmc%5E2').equation);

// Task : Get the nth element of a given array

// Point : solution 1 : using array methods
const getNthElement = (arr, n = 0) =>
	(n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];

console.log(getNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(getNthElement(['a', 'b', 'c'], 1)); // 'b'
// Log the element at index -3 of the array ['a', 'b', 'b']
console.log(getNthElement(['a', 'b', 'b'], -3)); // 'a
