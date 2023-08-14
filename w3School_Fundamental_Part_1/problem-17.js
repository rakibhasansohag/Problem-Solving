'use strict';
console.log('working...');

// task : Write a JavaScript program to chain asynchronous functions.

//  point : solution by : w3resource

const chainAsync = (fns) => {
	let cur = 0;

	const next = () => fns[cur++](next);
	next();
};

chainAsync([
	(next) => {
		console.log('0 seconds');
		setTimeout(next, 1000);
	},
	// (next) => {
	// 	console.log('1 second');
	// 	setTimeout(next, 2000);
	// },
	(next) => {
		console.log('2 seconds');
	},
]);

// point : solution 2 : using promise

const chainAsync2 = (fns) => {
	let cur = 0;
	const next = () => fns[cur++](next);
	next();
};

chainAsync2([
	(next) => {
		console.log('0 seconds');
		setTimeout(next, 1000);
	},
	(next) => console.log('1 second'),
]);

console.log('---------------- another problem -----------------');

// task : Write a JavaScript program to perform right-to-left function composition..

// point : solution 1 : using reduce

const compose = (...fns) =>
	fns.reduce(
		(f, g) =>
			(...args) =>
				f(g(...args)),
	);

const add5 = (x) => x + 5;
const multiply = (x, y) => x * y;

const multiplyAndAdd5 = compose(add5, multiply);
/// console.log(multiply(5, 2) + 5); // 15 ( logic for the program)

console.log(multiplyAndAdd5(5, 2));
console.log(multiplyAndAdd5(6, 3));
