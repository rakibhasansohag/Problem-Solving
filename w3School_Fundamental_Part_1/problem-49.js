'use strict';

// Task : Get the minimum value of an array, after mapping each element to a value using the provided function.

// Point : solution 1 : using Math.min and map
const minBy = (arr, fn) => {
	return Math.min(
		...arr.map(typeof fn === 'function' ? fn : (values) => values[fn]),
	);
};
console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));

console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));

// Point : solution 2 : without using any built-in functions
const minBy1 = (arr, fn) => {
	if (arr.length === 0) return undefined;

	let minValue = typeof fn === 'function' ? fn(arr[0]) : arr[0][fn];

	for (let i = 1; i < arr.length; i++) {
		const currentValue = typeof fn === 'function' ? fn(arr[i]) : arr[i][fn];

		if (currentValue < minValue) {
			minValue = currentValue;
		}
	}
	return minValue;
};

console.log(minBy1([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));

console.log(minBy1([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));
