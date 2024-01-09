'use strict';
console.log('working...');

// Task : Write a JavaScript program to create an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).

// Point : solution 1 - using obj keys

const keysPick = (obj, fn) =>
	Object.keys(obj)
		.filter((key) => fn(obj[key], key))
		.reduce((acc, cur) => {
			acc[cur] = obj[cur];
			return acc;
		}, {});

console.log(keysPick({ a: 1, b: '2', c: 3 }, (x) => typeof x === 'number'));
console.log(keysPick({ a: 1, b: '2', c: 3 }, (x) => typeof x === 'string'));
console.log(
	keysPick({ a: 1, b: '2', c: 3, d: false }, (x) => typeof x === 'boolean'),
);

// point : solution 2 : using for...of loop to solve the problem
const keysPick1 = (obj, fn) => {
	const result = {};

	for (const key of Object.keys(obj)) {
		if (fn(obj[key], key)) {
			result[key] = obj[key];
		}
	}

	return result;
};
console.log(keysPick1({ a: 1, b: '2', c: 3 }, (x) => typeof x === 'number'));
console.log(keysPick1({ a: 1, b: '2', c: 3 }, (x) => typeof x === 'string'));
console.log(
	keysPick1({ a: 1, b: '2', c: 3, d: false }, (x) => typeof x === 'boolean'),
);

// Point : solution 3 using prototype hasownproperty
const keysPick2 = (obj, fn) => {
	const result = {};

	for (const key in obj) {
		if (Object.hasOwnProperty.call(obj, key)) {
			const value = obj[key];
			if (fn(value, key)) {
				result[key] = value;
			}
		}
	}
	return result;
};

console.log(keysPick2({ a: 1, b: '2', c: 3 }, (x) => typeof x === 'number'));
console.log(keysPick2({ a: 1, b: '2', c: 3 }, (x) => typeof x === 'string'));
console.log(
	keysPick2({ a: 1, b: '2', c: 3, d: false }, (x) => typeof x === 'boolean'),
);

console.log('----------------------------------------------------------------');

// task : Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.

// Point : solution 1  : using filter, map, and reduce
const filterObj = (data, keys, fn) =>
	data.filter(fn).map((el) =>
		keys.reduce((acc, key) => {
			acc[key] = el[key];
			return acc;
		}, {}),
	);

const data = [
	{
		id: 1,
		name: 'john',
		age: 24,
	},
	{
		id: 2,
		name: 'mike',
		age: 50,
	},
	{
		id: 3,
		name: 'rakib',
		age: '60',
	},
];

console.log(filterObj(data, ['id', 'name'], (item) => item.age > 24));

const filterObj1 = (data, keys, fn) => {
	const result = [];

	for (let i = 0; i < data.length; i++) {
		const item = data[i];
		if (fn(item)) {
			const filteredItem = {};
			for (let j = 0; j < keys.length; j++) {
				const key = keys[j];
				filteredItem[key] = item[key];
			}
			result.push(filteredItem);
		}
	}

	return result;
};

console.log(filterObj1(data, ['id', 'name'], (item) => item.age > 24));
