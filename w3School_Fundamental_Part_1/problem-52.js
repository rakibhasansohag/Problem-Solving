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

// Task : Write a JavaScript program to get a list of elements that exist in both arrays.
const intersection = (array1, array2) => {
	const set = new Set(array2);

	return array1.filter((x) => set.has(x));
};

console.log(intersection([1, 2, 3], [4, 3, 2])); // Output: [2, 3]
console.log(intersection([2.1, 1.2], [2.3, 3.4]));

// Point: solution 2 : using reduce
const intersection2 = (array1, array2) => {
	return array1.reduce((acc, cur) => {
		if (array2.includes(cur)) {
			acc.push(cur);
		}
		return acc;
	}, []);
};
console.log(intersection2([1, 2, 3], [4, 3, 2])); // Output: [2, 3]
console.log(intersection2([2.1, 1.2], [2.3, 3.4]));

// Point: solution 3 : without using any built-in functions
const intersection3 = (array1, array2) => {
	const result = [];

	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if (array1[i] === array2[j]) {
				result.push(array1[i]);
				break;
			}
		}
	}
	return result;
};

console.log(intersection3([1, 2, 3], [4, 3, 2])); // Output: [2, 3]
console.log(intersection3([2.1, 1.2], [2.3, 3.4]));

// Task : Create a n-dimensional array with given value.
console.log('------------------ another problem ------------------');
const createArray = (value, ...args) =>
	args.length === 0
		? value
		: Array.from({ length: args[0] }).map(() =>
				createArray(value, ...args.slice(1)),
		  );

console.log(createArray(1, 3)); // Output: [1, 1, 1]
console.log(createArray(5, 2, 2, 2)); // Output: [[[5, 5], [5, 5]], [[5, 5], [5, 5]]]
console.log(createArray(3, 3, 3)); // [ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]

// Task : Initialize and fill an array with the specified values.
console.log(
	'------------------ initialize and fill an array with the specified values. ------------------',
);
// Point : solution 1:using array.fill
const initializeArrayWithValue = (n, value = 0) => Array(n).fill(value);

console.log(initializeArrayWithValue(3, 5)); // Output: [ 5, 5, 5 ]
console.log(initializeArrayWithValue(3)); // Output: [ 0, 0, 0 ]
console.log(initializeArrayWithValue(3, 'x')); // Output: [ 'x', 'x', 'x' ]

// Point: using Array.from()
const initializeArrayWithValue1 = (n, value = 0) =>
	Array.from({ length: n }, () => value);

console.log(initializeArrayWithValue1(3, 5)); // Output: [ 5, 5, 5 ]
console.log(initializeArrayWithValue1(3)); // Output: [ 0, 0, 0 ]
console.log(initializeArrayWithValue1(3, 'x')); // Output: [ 'x', 'x', 'x' ]

// Point : solution 2:using for loop
const initializeArrayWithValue2 = (n, value = 0) => {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(value);
	}
	return arr;
};

console.log(initializeArrayWithValue2(3, 5)); // Output: [ 5, 5, 5 ]
console.log(initializeArrayWithValue2(3)); // Output: [ 0, 0, 0 ]
console.log(initializeArrayWithValue2(3, 'x')); // Output: [ 'x', 'x', 'x' ]

// Point : solution 3:using from and map
const initializeArrayWithValue3 = (n, value = 0) =>
	Array.from(Array(n).keys()).map((v) => value);

console.log(initializeArrayWithValue3(3, 5)); // Output: [ 0, 1, 2 ]
console.log(initializeArrayWithValue3(3)); // Output: [ 0, 1, 2 ]
console.log(initializeArrayWithValue3(3, 'x')); // Output: [ 'x', 'x', 'x' ]

// Task :  Initializes an array containing the numbers in the specified range (in reverse) where start and end are inclusive with their common difference step.
console.log(
	'------------------------- another problem -------------------------',
);
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
	Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
		(value, i, array) => (array.length - i - 1) * step + start,
	);
console.log(initializeArrayWithRangeRight(5)); // Output: [5, 4, 3, 2, 1, 0]
console.log(initializeArrayWithRangeRight(7, 3)); // Output: [7, 6, 5, 4, 3]
console.log(initializeArrayWithRangeRight(9, 0, 2)); // Output: [8, 6, 4, 2, 0]

// Point: using for loop
const initializeArrayWithRangeRight1 = (end, start = 0, step = 1) => {
	const arr = [];
	for (let i = end; i >= start; i -= step) {
		arr.push(i);
	}
	return arr;
};
console.log(initializeArrayWithRangeRight1(5)); // Output: [5, 4, 3, 2, 1, 0]
console.log(initializeArrayWithRangeRight1(7, 3)); // Output: [7, 6, 5, 4, 3]
console.log(initializeArrayWithRangeRight1(9, 0, 2)); // Output: [8, 6, 4, 2, 0]
