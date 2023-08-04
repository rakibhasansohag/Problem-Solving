'use strict';
console.log('working....');

// task: Create an array of key-value pair arrays from a given object.

// point solution 1 - using Object.keys() and Array.prototype.map() methods
console.time('objectPairs1');
const objectPairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

console.log(objectPairs({ a: 1, b: 2 }));
console.log(objectPairs({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectPairs1');

// point solution 2 - using Object.entries() method

console.time('objectPairs2');

const objectPairs2 = (obj) => Object.entries(obj);

console.log(objectPairs2({ a: 1, b: 2 }));
console.log(objectPairs2({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectPairs2');

// point solution 3 - using for...in loop

console.time('objectPairs3');

const objectPairs3 = (obj) => {
	const result = [];

	for (const key in obj) {
		result.push([key, obj[key]]);
	}
	return result;
};

console.log(objectPairs3({ a: 1, b: 2 }));
console.log(objectPairs3({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectPairs3');

// point solution 4 - using Object.keys() and Array.reduce() methods

console.time('objectParis4');

const objectPairs4 = (obj) =>
	Object.keys(obj).reduce((acc, key) => [...acc, [key, obj[key]]], []);

console.log(objectPairs4({ a: 1, b: 2 }));
console.log(objectPairs4({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectParis4');

// point solution 5 - using Object.keys() and Array.forEach() methods

console.time('objectParis5');

const objectParis5 = (obj) => {
	const result = [];

	Object.keys(obj).forEach((key) => {
		result.push([key, obj[key]]);
	});

	return result;
};

console.log(objectParis5({ a: 1, b: 2 }));
console.log(objectParis5({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectParis5');

// point solution 6 - using for...of loop

console.time('objectParis6');

const objectParis6 = (obj) => {
	const result = [];

	for (const [key, value] of Object.entries(obj)) {
		result.push([key, value]);
	}
	return result;
};

console.log(objectParis6({ a: 1, b: 2 }));
console.log(objectParis6({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectParis6');
