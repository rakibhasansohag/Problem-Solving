'use strict';
console.log('working...');

// Task : Write a JavaScript program to get all unique values of an array, based on a provided comparator function.

// Point : using reducer and some method
const uniqueElements = (arr, fn) =>
	arr.reduce((acc, cur) => {
		if (!acc.some((x) => fn(cur, x))) acc.push(cur);
		return acc;
	}, []);

console.log(
	uniqueElements(
		[
			{ id: 0, value: 'a' },
			{ id: 1, value: 'b' },
			{ id: 2, value: 'c' },
			{ id: 1, value: 'd' },
			{ id: 0, value: 'e' },
			{ id: 3, value: 'e' },
		],
		(a, b) => a.id == b.id,
	),
);

// Point : using set and  filter and has keys

const uniqueElements1 = (arr, fn) => {
	const uniqueEle = new Set();

	return arr.filter((current) => {
		const unique = fn(current);

		if (!uniqueEle.has(unique)) {
			uniqueEle.add(unique);
			return true;
		}
		return false;
	});
};
console.log(
	uniqueElements1(
		[
			{ id: 0, value: 'a' },
			{ id: 1, value: 'b' },
			{ id: 2, value: 'c' },
			{ id: 1, value: 'd' },
			{ id: 0, value: 'e' },
			{ id: 3, value: 'e' },
		],
		(item) => item.id,
	),
);
