'use strict';
console.log('working...');

// task : Write a JavaScript program to uncurry a function up to depth n.

// point : using spread operator and reduce  and applying  condition
const uncurry =
	(fn, n = 1) =>
	(...args) => {
		const next = (acc) => (args) => args.reduce((acc, cur) => acc(cur), acc);

		if (n > args.length) throw new RangeError('Arguments  too short !');

		return next(fn)(args.slice(0, n));
	};
const add = (x) => (y) => (z) => x + y + z;
const uncurriedAdd = uncurry(add, 3);
console.log(uncurriedAdd(1, 2, 3));
// console.log(uncurriedAdd(1, 2));

// task : Write a JavaScript program to create a function that accepts up to one argument, ignoring any additional arguments.

// Point : solution 1 : calling the provided function with arguments

const ignoreing = (fn) => (val) => fn(val);
console.log(['6', '8', '10'].map(ignoreing(parseInt)));
console.log(
	['6', '7', '8', '9', '10', '11']
		.map(ignoreing(parseInt))
		.filter((x) => x !== 10),
);

// task : Write a JavaScript program to check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Point : solution using every method
const truthyCheckCollection = (collection, prev) =>
	collection.every((obj) => obj[prev]);

console.log(
	truthyCheckCollection(
		[
			{ user: 'Tinky-Winky', sex: 'male' },
			{ user: 'Dipsy', sex: 'male' },
		],
		'sex',
	),
);

console.log(
	truthyCheckCollection(
		[
			{ user: 'Tinky-Winky', sex: 'male', age: 12 },
			{
				user: 'rakib',
				sex: 'male',
				age: 12,
			},
		],

		'user',
	),
);

// task : Write a JavaScript program to truncate a string up to a specified length.

// Point : solution using slice and condition
const truncateString = (str, num) =>
	str.length > num ? str.slice(0, num > 3 ? num - 3 : null) + '...' : str;
console.log(truncateString('boomerang', 7));
console.log(truncateString('sevenIsDead', 10));

// Point : solution without using build-in function

const truncateString1 = (str, num) => {
	let truncated = '';

	if (str.length > num) {
		for (let i = 0; i < num - 3; i++) {
			truncated += str[i];
		}
		truncated += '...';
	} else {
		truncated = str;
	}
	return truncated;
};

console.log(truncateString1('boomerang', 7));
console.log(truncateString1('sevenIsDead', 10));
