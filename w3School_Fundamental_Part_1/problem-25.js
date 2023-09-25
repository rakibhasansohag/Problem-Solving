' use strict';
console.log('working....');

// Task : Replace all but the last number of characters with the specified mask character.

// Point : solution 1 : using slice method

const musk = (cc, num) => {
	let len = cc.length;
	return cc.slice(len - num).padStart(len, '*');
};

console.log(musk('123456789', 4));
console.log(musk('123456789', 3));

// Point : solution 2 : using repeat method

const musk2 = (cc, num) => {
	let len = cc.length;
	return '*'.repeat(len - num) + cc.slice(len - num);
};

console.log(musk2('123456789', 4));
console.log(musk2('123456789', 3));

// Point : solution 3 : 3 method with default value

const musk3 = (cc, num = 4, mask = '*') => {
	let len = cc.length;
	return mask.repeat(len - num) + cc.slice(len - num);
};

console.log(musk3('123456789', 4));
console.log(musk3('123456789', 3));
console.log(musk3('123456789', 3, '$'));

console.log('........... another Problem ...........');

// task : Get the maximum value of an array, after mapping each element to a value using the provided function.

// Point : solution 1 : using Math.max and spread operator

const maxBy = (arr, fn) =>
	Math.max(...arr.map(typeof fn === 'function' ? fn : (val) => val[fn]));

console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));

// Point : solution 2 : using reduce method

const maxBy2 = (arr, fn) => {
	if (arr.length === 0) return undefined;

	return arr.reduce(
		(acc, val) => {
			return Math.max(acc, typeof fn === 'function' ? fn(val) : val[fn]);
		},
		typeof fn === 'function' ? fn(arr[0]) : arr[0][fn],
	);
};

console.log(maxBy2([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(maxBy2([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));
