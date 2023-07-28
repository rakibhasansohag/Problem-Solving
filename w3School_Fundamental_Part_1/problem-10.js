'use strict';
console.log('working....');

// task : Get a sorted array of objects ordered by properties and orders.

// point : solution 1 (using sort() method)

const sortedObject = (arr, props, orders) =>
	[...arr].sort((a, b) =>
		props.reduce((acc, prop, i) => {
			if (acc === 0) {
				const [p1, p2] =
					orders && orders[i] === 'desc'
						? [b[prop], a[prop]]
						: [a[prop], b[prop]];
				acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
			}
			return acc;
		}, 0),
	);

const users = [
	{ name: 'fred', age: 48 },
	{ name: 'barney', age: 36 },
	{ name: 'fred', age: 40 },
];

console.log(sortedObject(users, ['name', 'age'], ['asc', 'desc']));
console.log(sortedObject(users, ['name', 'age']));
console.log('---');
console.log(sortedObject(users, ['name', 'age'], ['desc', 'asc']));

// point : solution 2 (using lodash)
console.log('lodash part  ............');
const _ = require('lodash');

const sortedObject2 = (arr, props, orders) => _.orderBy(arr, props, orders);

console.log(sortedObject2(users, ['name', 'age'], ['asc', 'desc']));
console.log(sortedObject2(users, ['name', 'age']));
console.log('---');
console.log(sortedObject2(users, ['name', 'age'], ['desc', 'asc']));

// point : solution 3 (without build-in method)

const sortedObject3 = (arr, props, orders) => {
	const compare = (a, b, i) => {
		if (i >= props.length) return 0;
		const [p1, p2] =
			orders && orders[i] === 'desc'
				? [b[props[i]], a[props[i]]]
				: [a[props[i]], b[props[i]]];
		return p1 > p2 ? 1 : p1 < p2 ? -1 : compare(a, b, i + 1);
	};

	return [...arr].sort((a, b) => compare(a, b, 0));
};

console.log(sortedObject3(users, ['name', 'age'], ['asc', 'desc']));
console.log(sortedObject3(users, ['name', 'age']));
console.log('---');
console.log(sortedObject3(users, ['name', 'age'], ['desc', 'asc']));

console.log('-------------- another problem -----------------');

// task : Pad a string on both sides with the specified character.

// point : solution 1 (using repeat() method)

const padString = (str, length, char = ' ') => {
	const len = length - str.length;
	const left = Math.round(len / 2);
	const right = len - left;

	if (left < 0 || right < 0) return str;

	return char.repeat(left) + str + char.repeat(right);
};

console.log(padString('cat', 8));
console.log(padString(String(42), 6, '0'));
console.log(padString('foobar', 3, 'A'));

// point : solution 2 (using padStart() and padEnd() method)

const padString2 = (str, length, char = ' ') => {
	const len = length - str.length;
	const left = Math.round(len / 2);
	const right = len - left;

	if (left < 0 || right < 0) return str;

	return (
		str.padStart(left + str.length, char) + str.padEnd(right + str.length, char)
	);
};

console.log(padString2('cat', 8));
console.log(padString2(String(42), 6, '0'));
console.log(padString2('foobar', 3, 'A'));

// point : solution 3 (using repeat() method)

const padString3 = (str, length, char = ' ') => {
	const len = length - str.length;
	const left = Math.round(len / 2);
	const right = len - left;

	if (left < 0 || right < 0) return str;

	return char.repeat(left) + str + char.repeat(right);
};

console.log(padString3('cat', 8));
console.log(padString3(String(42), 6, '0'));
console.log(padString3('foobar', 3, 'A'));

// point : solution 4 ( using for loop )

const padString4 = (str, length, char = ' ') => {
	const len = length - str.length;
	const left = Math.round(len / 2);
	const right = len - left;

	if (left < 0 || right < 0) return str;

	let result = '';
	for (let i = 0; i < left; i++) {
		result += char;
	}

	result += str;

	for (let i = 0; i < right; i++) {
		result += char;
	}

	return result;
};

console.log(padString4('cat', 8));
console.log(padString4(String(42), 6, '0'));
console.log(padString4('foobar', 3, 'A'));

console.log('-------------- another problem -----------------');

// task : Remove the key-value pairs corresponding to the given keys from an object.

// point : solution 1 (using for loop)

const removeKey = (obj, arr) => {
	for (let i = 0; i < arr.length; i++) {
		delete obj[arr[i]];
	}
	return obj;
};

const obj = { a: 1, b: '2', c: 3 };

console.log(removeKey(obj, ['b']));
console.log(removeKey(obj, ['a', 'c']));
console.log(removeKey(obj, ['a', 'c', 'b']));

// point : solution 2 (using filter() method)

const removeKey2 = (obj, arr) => {
	return Object.keys(obj)
		.filter((key) => !arr.includes(key))
		.reduce((acc, key) => {
			acc[key] = obj[key];
			return acc;
		}, {});
};

const obj1 = { a: 1, b: '2', c: 3 };

console.log(removeKey2(obj1, ['b']));
console.log(removeKey2(obj1, ['a', 'c']));
console.log(removeKey2(obj1, ['a', 'c', 'b']));

// point : solution 3 (using reduce() method)

const removeKey3 = (obj, arr) => {
	return Object.keys(obj).reduce((acc, key) => {
		if (!arr.includes(key)) acc[key] = obj[key];
		return acc;
	}, {});
};

const obj2 = { a: 1, b: '2', c: 3 };

console.log(removeKey3(obj2, ['b']));
console.log(removeKey3(obj2, ['a', 'c']));
console.log(removeKey3(obj2, ['a', 'c', 'b']));
