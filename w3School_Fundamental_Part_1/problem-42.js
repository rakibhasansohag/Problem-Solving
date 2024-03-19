'use strict';
console.log('working...');

// task : Write a JavaScript program to get the symmetric difference between two given arrays, using a provided function as a comparator.

// point: solve using filter, and findindex

const symmetricDifferenceWith = (arr, value, comp) => [
	...arr.filter((a) => value.findIndex((b) => comp(a, b)) === -1),
	...value.filter((a) => arr.findIndex((b) => comp(a, b)) === -1),
];
console.log(
	symmetricDifferenceWith(
		[1, 1.2, 1.5, 3, 0],
		[1.9, 3, 0, 3.9],
		(a, b) => Math.round(a) === Math.round(b),
	),
);

// Point: solving  without using built-in functions
const symmetricDifferenceWith1 = (arr, value, comp) => {
	const result = [];

	for (const a of arr) {
		let flag = false;
		for (const b of value) {
			if (comp(a, b)) {
				flag = true;
				break;
			}
		}
		if (!flag) {
			result.push(a);
		}
	}

	for (const b of value) {
		let flag = false;
		for (const a of arr) {
			if (comp(a, b)) {
				flag = true;
				break;
			}
		}
		if (!flag) result.push(b);
	}

	return result;
};
console.log(
	symmetricDifferenceWith(
		[1, 1.2, 1.5, 3, 0],
		[1.9, 3, 0, 3.9],
		(a, b) => Math.round(a) === Math.round(b),
	),
);

const a = (arr, value, comp) => {
	return [
		...arr.filter((a) => value.findIndex((b) => comp(a, b)) === -1),
		...value.filter((b) => arr.findIndex((a) => comp(a, b)) === -1),
	];
};
console.log(
	a(
		[1, 1.2, 1.5, 3, 0],
		[1.9, 3, 0, 3.9],
		(a, b) => Math.round(a) === Math.round(b),
	),
);

const b = (arr, value, comp) => {
	const result = [];

	for (const a of arr) {
		let flag = false;
		for (const b of value) {
			if (comp(a, b)) {
				flag = true;
				break;
			}
		}
		if (!flag) {
			result.push(a);
		}
	}

	for (const b of value) {
		let flag = false;
		for (const a of arr) {
			if (comp(a, b)) {
				flag = true;
				break;
			}
		}
		if (!flag) {
			result.push(b);
		}
	}

	return result;
};
console.log(
	b(
		[1, 1.2, 1.5, 3, 0],
		[1.9, 3, 0, 3.9],
		(a, b) => Math.round(a) === Math.round(b),
	),
);

// Task:Write a JavaScript program to get the symmetric difference between two given arrays.
// Point: solution 1 : using Set() and filter() method
console.log('----------------------------------------------------------------');
const symmetricDifference = (a, b) => {
	const difference = new Set(a);
	const difference2 = new Set(b);

	return [
		...a.filter((x) => !difference2.has(x)),
		...b.filter((x) => !difference.has(x)),
	];
};
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Point: solving without using any built-in functions
const symmetricDifference1 = (a, b) => {
	const result = [];

	for (const x of a) {
		let flag = false;
		for (const y of b) {
			if (Math.round(x) === Math.round(y)) {
				flag = true;
				break;
			}
		}
		if (!flag) result.push(x);
	}

	for (const x of b) {
		let flag = false;
		for (const x of a) {
			if (Math.round(x) === Math.round(y)) {
				flag = true;
				break;
			}
		}
		if (!flag) result.push(y);
	}

	return result;
};
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Point: using for loop
const symmetricDifference2 = (a, b) => {
	const result = [];
	for (let i = 0; i < a.length; i++) {
		if (b.indexOf(a[i]) === -1) {
			result.push(a[i]);
		}
	}
	for (let i = 0; i < b.length; i++) {
		if (a.indexOf(b[i]) === -1) {
			result.push(b[i]);
		}
	}
	return result;
};

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Task: Write a JavaScript program to get the sum of the powers of all the numbers from start to end (both inclusive).

// Point : solving using Array.fill(), map(), reduce();
const sumPower = (end, power = 2, start = 1) => {
	return Array(end + 1 - start)
		.fill()
		.map((_, i) => (i + start) ** power)
		.reduce((a, b) => a + b, 0);
};

console.log(sumPower(10));
console.log(sumPower(10, 3));
console.log(sumPower(10, 3, 5));

// Point : solving without using any built-in functions
const sumPower1 = (end, power = 2, start = 1) => {
	let sum = 0;

	for (let i = start; i <= end; i++) {
		sum += i ** power;
	}

	return sum;
};

console.log(sumPower1(10));
console.log(sumPower1(10, 3));
console.log(sumPower1(10, 3, 5));

console.log('----------------------------------------------------------------');

// task : Write a JavaScript program to generate all permutations of a string (contains duplicates).

// Point : solving using  map(), reduce(),
const stringPermutations = (str) => {
	if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

	return str
		.split('')
		.reduce(
			(acc, letter, i) =>
				acc.concat(
					stringPermutations(str.slice(0, i)).map((val) => letter + val),
				),
			[],
		);
};

console.log(stringPermutations('abc'));
console.log(stringPermutations('*$*'));
console.log(stringPermutations('aabb'));

const stringPermutations1 = (input) => {
	const result = [];

	const stringPermutations1Helper = (inputString, prefix = '') => {
		if (inputString.length === 0) {
			result.push(prefix);
			return;
		}

		const visited = new Set();
		for (let i = 0; i < inputString.length; i++) {
			const currentChar = inputString[i];
			if (!visited.has(currentChar)) {
				visited.add(currentChar);
				const remainingString =
					inputString.slice(0, i) + inputString.slice(i + 1);
				stringPermutations1Helper(remainingString, prefix + currentChar);
			}
		}
	};

	stringPermutations1Helper(input);
	return result;
};

console.log(stringPermutations1('abc'));
console.log(stringPermutations1('*$*'));
console.log(stringPermutations1('aabb'));
