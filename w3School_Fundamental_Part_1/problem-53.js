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

// Task : Calculate the Hamming distance between two values.
const hammingDistance = (num1, num2) =>
	((num1 ^ num2).toString(2).match(/1/g) || '').length;

console.log(hammingDistance(2, 3)); // Output: 1
console.log(hammingDistance(5, 3)); // Output: 2

// Point: solution 2 : using bitwise operator
const hammingDistance1 = (num1, num2) => {
	let xor = num1 ^ num2;
	let count = 0;

	while (xor) {
		xor &= xor - 1;
		count++;
	}

	return count;
};

console.log(hammingDistance1(2, 3)); // Output: 1
console.log(hammingDistance1(5, 3)); // Output: 2

// Task : Write a JavaScript program to get the native type of a value. Returns the lowercased constructor name of value, "undefined" or "null" if value is undefined or null.
const getType = (value) =>
	value === undefined
		? 'undefined'
		: value === null
		? 'null'
		: value.constructor.name.toLowerCase();

console.log(getType(new Set([1, 2, 3])));
console.log(getType(Math.round(10)));
console.log(getType({}));

// Task : Write a JavaScript program to get a string like HH:MM:SS from a Date object.
const getFColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);

console.log(getFColonTimeFromDate(new Date(2000, 0, 1, 0, 0, 0)));
console.log(getFColonTimeFromDate(new Date(2000, 0, 1, 23, 59, 59)));
console.log(getFColonTimeFromDate(new Date(2000, 0, 1, 0, 0, 0, 500)));
console.log(getFColonTimeFromDate(new Date(2000, 0, 1, 0, 0, 0, 500000)));

// Task : Write a JavaScript program that initializes an array containing the numbers in the specified range. This is where start and end are inclusive and the ratio between the two terms is step. Returns an error if step equals 1.
const geometricProgression = (end, start = 1, step = 2) =>
	Array.from({
		length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,
	}).map((value, index) => start * step ** index);

console.log(geometricProgression(256));
console.log(geometricProgression(256, 3));
console.log(geometricProgression(256, 1, 4));

// Task : Calculate the greatest common divisor between two or more numbers/arrays.
const gcd = (...arr) => {
	const _gcd = (a, b) => (!b ? a : gcd(b, a % b));

	return [...arr].reduce((x, y) => _gcd(x, y));
};

console.log(gcd(8, 36)); // Output: 4 (GCD of 8 and 36)
console.log(gcd(...[12, 8, 32])); // Output: 4 (GCD of 12, 8, and 32)
console.log(gcd([12, 8, 32])); // Output: 4 (GCD of 12, 8, and 32)

// Task :  Get the standard deviation of an array of numbers.
const standardDeviation = (arr, usePopulation = false) => {
	const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;

	const sumOfSquaredDifferences = arr
		.reduce((acc, val) => acc.concat((val - mean) ** 2), [])
		.reduce((acc, val) => acc + val, 0);

	return Math.sqrt(
		sumOfSquaredDifferences / (arr.length - (usePopulation ? 0 : 1)),
	);
};
console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21]));
console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true));
console.log(standardDeviation([10, 2, 38, 23, 343, 214, 34, 234, 34]));

console.log('---------------- another problem ------------------');
// Task : Get n random elements at unique keys from array up to the size of array.
const sampleSizes = ([...arr], n = 1) => {
	let m = arr.length;

	while (m) {
		const i = Math.floor(Math.random() * m--);

		[arr[m], arr[i]] = [arr[i], arr[m]];
	}

	return arr.slice(0, n);
};

console.log(sampleSizes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(sampleSizes([1, 2, 3], 2));
console.log(sampleSizes([1, 2, 3], 4));

console.log('---------------- another problem ------------------');

// Task : Remove elements from an array for which the given function returns false.
const remove = (arr, func) =>
	Array.isArray(arr)
		? arr.filter(func).reduce((acc, val) => {
				arr.splice(arr.indexOf(val), 1);
				return acc.concat(val);
		  }, [])
		: [];

console.log(remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x % 2 === 0));
console.log(remove([1, 2, 3, 4], (n) => n % 2 === 0)); // Output: [2, 4]
