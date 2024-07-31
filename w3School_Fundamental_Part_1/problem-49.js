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
