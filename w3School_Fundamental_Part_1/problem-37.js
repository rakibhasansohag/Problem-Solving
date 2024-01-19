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
