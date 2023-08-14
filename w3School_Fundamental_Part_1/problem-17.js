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

