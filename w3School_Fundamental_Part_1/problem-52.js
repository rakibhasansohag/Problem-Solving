'use strict';
console.log('working...');

// Task : Get a list of elements that exist in both arrays, after applying the provided function to each array element of both arrays.

// Point : solution 1 : using set and filter
const intersectionBy = (array1, array2, fn) => {
	const set1 = new Set(array2.map((x) => fn(x)));

	return array1.filter((x) => set1.has(fn(x)));
};

console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// Output: [2.1]
console.log(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], (o) => o.x));

// Point : solution 2 : using reduce
const intersectionBy2 = (array1, array2, fn) => {
	const set1 = new Set(array2.map((x) => fn(x)));

	return array1.reduce((acc, cur) => {
		if (set1.has(fn(cur))) {
			acc.push(cur);
		}
		return acc;
	}, []);
};

console.log(intersectionBy2([2.1, 1.2], [2.3, 3.4], Math.floor));
// Output: [2.1]
console.log(intersectionBy2([{ x: 1 }], [{ x: 2 }, { x: 1 }], (o) => o.x));

// Point: solution 3: without using any built-in functions
const intersectionBy3 = (array1, array2, fn) => {
	const result = [];

	for (let i = 0; i < array1.length; i++) {
		const modifiedValue1 = fn(array1[i]);

		for (let j = 0; j < array2.length; j++) {
			const modifiedValue2 = fn(array2[j]);

			if (modifiedValue1 === modifiedValue2) {
				result.push(array1[i]);
				break;
			}
		}
	}
	return result;
};

console.log(intersectionBy3([2.1, 1.2], [2.3, 3.4], Math.floor));
// Output: [2.1]
console.log(intersectionBy3([{ x: 1 }], [{ x: 2 }, { x: 1 }], (o) => o.x));
console.log('exist in both arrays...................');
