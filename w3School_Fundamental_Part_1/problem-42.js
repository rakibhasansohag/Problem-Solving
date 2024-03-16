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
