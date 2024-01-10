'use strict';
console.log('working...');

// task : Write a JavaScript program to hash an given input string into a whole number.

// Point : solution 1 : using reduce and charCodeAt
const hashPassword = (str) => {
	let arr = str.split('');

	return arr.reduce(
		(hashCode, currentValue) =>
			(hashCode =
				currentValue.charCodeAt(0) +
				(hashCode << 6) +
				(hashCode << 16) -
				hashCode),
		0,
	);
};

console.log(hashPassword('w3r')); // output : 986464758
console.log(hashPassword('Name')); // output : 403285176

// Point : solution 2 : using for loop and charCodeAt
const hashPassword1 = (str) => {
	let hash = 0;

	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		hash = hash * 16 + charCode;
	}
	return hash;
};
console.log(hashPassword1('w3r'));
console.log(hashPassword1('Name'));

console.log('----------------------------------------------------------------');
// Task : Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays. Use function as the last value to specify how grouped values should be combined.

// Point : solution 1 :

const grouped = (...array) => {
	const fn =
		typeof array[array.length - 1] === 'function' ? array.pop() : undefined;

	return Array.from(
		{
			length: Math.max(...array.map((a) => a.length)),
		},
		(_, i) => (fn ? fn(...array.map((a) => a[i])) : array.map((a) => a[i])),
	);
};

// grouped([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
console.log(
	grouped(
		[1, 2, 3],
		[10, 20],
		[100, 200],
		(a, b, c) =>
			(a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c'),
	),
);

// Point : solution 2  : without using built-in functions
const grouped1 = (...arrays) => {
	const fn =
		typeof arrays[arrays.length - 1] === 'function'
			? arrays[arrays.length - 1]
			: undefined;
	const length = fn ? arrays.length - 1 : arrays.length;

	const maxLength = getMaxArrayLength(arrays);

	const result = [];

	for (let i = 0; i < maxLength; i++) {
		const args = [];
		for (let j = 0; j < length; j++) {
			args.push(arrays[j][i]);
		}
		result.push(fn ? fn(...args) : args);
	}

	return result;
};

// Helper function to get the maximum length of arrays
const getMaxArrayLength = (arrays) => {
	let maxLength = 0;

	for (let i = 0; i < arrays.length; i++) {
		if (arrays[i].length > maxLength) {
			maxLength = arrays[i].length;
		}
	}

	return maxLength;
};

console.log(grouped1([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c));
console.log(
	grouped1(
		[1, 2, 3],
		[10, 20],
		[100, 200],
		(a, b, c) =>
			(a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c'),
	),
);
