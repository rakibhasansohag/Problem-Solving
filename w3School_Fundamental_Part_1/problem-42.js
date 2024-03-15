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
