'use strict';
console.log('working...');

// task : Write a JavaScript program to add an event listener to an element with the ability to use event delegation.

// Point : solution 1 : solve using matches and addEventListener to the element with the ability to use event delegation.

const turnOn = (el, evt, fn, opts = {}) => {
	const defectorFn = (e) =>
		opts.target && e.target.matches(opts.target) && fn.call(e.target, e);

	el.addEventListener(
		evt,
		opts.target ? defectorFn : fn,
		opts.options || false,
	);

	if (opts.target) return defectorFn;
};

const fn = () => console.log('! delegator function');
console.log(turnOn(document.body, 'click', fn));
console.log(turnOn(document.body, 'click', fn, { target: 'p' }));
console.log(turnOn(document.body, 'click', fn, { target: true }));

// Point : simplified version of the problem above
const turnOn1 = (el, evt, fn, opts = {}) => {
	const defectorFn = (e) => {
		if (!opts.target || e.target.matches(opts.target)) {
			fn.call(e.target, e);
		}
	};
	el.addEventListener(evt, defectorFn, opts.options || false);

	return opts.target ? defectorFn : undefined;
};
console.log('--------------------------------------------------------');
const fn1 = () => console.log('! delegator function');
console.log(turnOn1(document.body, 'click', fn1));
console.log(turnOn1(document.body, 'click', fn1, { target: 'p' }));
console.log(turnOn1(document.body, 'click', fn1, { target: true }));

console.log('----------------------------------------------------------------');

// task : Write a JavaScript program to pick  the key-value pairs corresponding to the given keys from an object.

// Point : solution 1 : using reduce

const keys = (obj, arr) =>
	arr.reduce((acc, cur) => (cur in obj && (acc[cur] = obj[cur]), acc), {});

console.log(keys({ a: 1, b: '2', c: 3 }, ['a', 'c']));
console.log(keys({ a: 1, b: '2', c: 3, d: 3 }, ['a', 'd']));

// Point : solution 2 : without using built-in functions and prototype.hasOwnProperty
console.log('--------------------------------');

const keys1 = (obj, arr) => {
	const result = {};

	for (let i = 0; i < arr.length; i++) {
		const key = arr[i];

		if (obj.hasOwnProperty(key)) {
			result[key] = obj[key];
		}
	}
	return result;
};

console.log(keys1({ a: 1, b: '2', c: 3 }, ['a', 'c']));
console.log(keys1({ a: 1, b: '2', c: 3, d: 3 }, ['a', 'd']));

// Point : solution 3 : using includes
const keys2 = (obj, arr) => {
	const result = {};

	for (let key in obj) {
		if (arr.includes(key)) {
			result[key] = obj[key];
		}
	}

	return result;
};

console.log(keys2({ a: 1, b: '2', c: 3 }, ['a', 'c']));
console.log(keys2({ a: 1, b: '2', c: 3, d: 3 }, ['a', 'd']));
