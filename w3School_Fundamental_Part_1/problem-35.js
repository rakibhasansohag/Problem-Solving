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

// task : Write a JavaScript program to get the nth element of a given array.
console.log('----------------------------------------------------------------');

const nthElement = (arr, n = 0) =>
	(n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0] ||
	'nothing found ==> try something else';

console.log(nthElement(['a', 'b', 'c'], 1));
console.log(nthElement(['a', 'b', 'c'], 2));
console.log(nthElement(['a', 'b', 'c'], 4));

// Point : solution 2 : without using built-in functions
const nthElement1 = (arr, n = 0) => {
	if (n >= 0) {
		for (let i = 0; i < arr.length; i++) {
			if (i === n) {
				return arr[i];
			}
		}
	}
	return 'nothing found ==> try something else';
};

console.log(nthElement1(['a', 'b', 'c'], 1));
console.log(nthElement1(['a', 'b', 'c'], 2));
console.log(nthElement1(['a', 'b', 'c'], 4));

// Point : solving this problem assuming there is a index number
const nthElement2 = (arr, n = 0, index = 0) => {
	if (index === n) {
		return arr[index] !== undefined
			? arr[index]
			: 'nothing found ==> try something else';
	}
	if (index < arr.length) {
		return nthElement(arr, n, index + 1);
	}
	return 'nothing found ==> try something else';
};

console.log(nthElement2(['a', 'b', 'c'], 1));
console.log(nthElement2(['a', 'b', 'c'], 2));
console.log(nthElement2(['a', 'b', 'c'], 4));
