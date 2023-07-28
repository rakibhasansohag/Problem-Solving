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
