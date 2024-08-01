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

// Task : Create a new object from the combination of two or more objects.

// Point : solution  1 : using reduce, object keys
const mergeObject = (...objs) => {
	return objs.reduce((acc, obj) => {
		Object.keys(obj).forEach((k) => {
			if (acc.hasOwnProperty(k)) {
				if (Array.isArray(acc[k]) && Array.isArray(obj[k])) {
					acc[k] = acc[k].concat(obj[k]);
				} else if (typeof acc[k] === 'object' && typeof obj[k] === 'object') {
					acc[k] = mergeObject(acc[k], obj[k]);
				} else {
					acc[k] = [].concat(acc[k], obj[k]);
				}
			} else {
				acc[k] = obj[k];
			}
		});
		return acc;
	}, {});
};

const object = {
	a: [{ x: 2 }, { y: 4 }],
	b: 1,
};
const other = {
	a: { z: 3 },
	b: [2, 3],
	c: 'foo',
};
console.log(mergeObject(object, other));

// // Point : solution  2 : using Object.assign
// const mergeObject1 = (...objs) => {
// 	return objs.reduce((acc, obj) => {
// 		return Object.assign(acc, obj);
// 	}, {});
// };
// console.log(mergeObject1(object, other));

// Point : solution  3 : without using any built-in functions

const mergeObject2 = (...objs) => {
	if (obj.length === 0) return {};

	const result = {};

	const mergeValues = (acc, obj) => {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (acc.hasOwnProperty(key)) {
					if (typeof acc[key] === 'object' && typeof obj[key] === 'object') {
						if (Array.isArray(acc[key]) && Array.isArray(obj[key])) {
							acc[key] = mergeArrays(acc[key], obj[key]);
						} else {
							acc[key] = mergeObject2(acc[key], obj[key]);
						}
					} else {
						acc[key] = [].concat(acc[key], obj[key]);
					}
				} else {
					acc[key] = obj[key];
				}
			}
		}
		return acc;
	};

	const mergeArrays = (arr1, arr2) => {
		const result = [];
		let i = 0;

		while (i < arr1.length || i < arr2.length) {
			if (i < arr1.length) {
				result.push(arr1[i]);
			}
			if (i < arr2.length) {
				result.push(arr2[i]);
			}
			i++;
		}

		return result;
	};

	for (let i = 0; i < objs.length; i++) {
		result = mergeValues(result, objs[i]);
	}

	return result;
};

const object1 = {
	a: [{ x: 2 }, { y: 4 }],
	b: 1,
};
const other1 = {
	a: { z: 3 },
	b: [2, 3],
	c: 'foo',
};

console.log('without using any built-in functions');
console.log(mergeObject(object1, other1));

console.log('match object with provided functions');

// Task : Compare two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.

// Point : solution  1 : using Object.keys
const matchObjects = (obj, source, fn) => {
	return Object.keys(source).every((key) =>
		obj.hasOwnProperty(key) && fn
			? fn(obj[key], source[key], key, obj, source)
			: obj[key] == source[key],
	);
};

console.log(matchObjects({ a: 1, b: 2 }, { a: 1 }, (a, b) => a === b));
const isGreeting = (val) => /^h(?:i|ello)$/.test(val);
console.log(
	matchObjects(
		{ greeting: 'hello' }, // Object 'obj' with property 'greeting' set to 'hello'
		{ greeting: 'hi' }, // Object 'source' with property 'greeting' set to 'hi'
		// Custom comparison function to check if both values are greetings using 'isGreeting' function
		(oV, sV) => isGreeting(oV) && isGreeting(sV),
	),
);

// Point: solution  2 : without using any built-in functions
const matchObjects1 = (obj, source, fn) => {
	const sourceKeys = getKeys(source);

	for (let i = 0; i < sourceKeys.length; i++) {
		const key = sourceKeys[i];

		if (
			!hasProperty(obj, key) ||
			(fn && !fn(obj[key], source[key], key, obj, source))
		) {
			return false;
		}
	}

	return true;
};

const getKeys = (obj) => {
	let keys = [];

	for (let key in obj) {
		if (hasProperty(obj, key)) {
			keys.push(key);
		}
	}

	return keys;
};

const hasProperty = (obj, key) => {
	for (let prop in obj) {
		if (prop === key) {
			return true;
		}
	}

	return false;
};
console.log(matchObjects1({ a: 1, b: 2 }, { a: 1 }, (a, b) => a === b)); // true
const isGreeting1 = (val) => /^h(?:i|ello)$/.test(val);
console.log(
	matchObjects1(
		{ greeting: 'hello' },
		{ greeting: 'hi' },
		(oV, sV) => isGreeting1(oV) && isGreeting1(sV),
	),
); // false
