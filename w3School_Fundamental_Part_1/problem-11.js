'use strict';
console.log('working....');

// task: Create an array of key-value pair arrays from a given object.

// point solution 1 - using Object.keys() and Array.prototype.map() methods
console.time('objectPairs1');
const objectPairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

console.log(objectPairs({ a: 1, b: 2 }));
console.log(objectPairs({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectPairs1');

// point solution 2 - using Object.entries() method

console.time('objectPairs2');

const objectPairs2 = (obj) => Object.entries(obj);

console.log(objectPairs2({ a: 1, b: 2 }));
console.log(objectPairs2({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectPairs2');

// point solution 3 - using for...in loop

console.time('objectPairs3');

const objectPairs3 = (obj) => {
	const result = [];

	for (const key in obj) {
		result.push([key, obj[key]]);
	}
	return result;
};

console.log(objectPairs3({ a: 1, b: 2 }));
console.log(objectPairs3({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectPairs3');

// point solution 4 - using Object.keys() and Array.reduce() methods

console.time('objectParis4');

const objectPairs4 = (obj) =>
	Object.keys(obj).reduce((acc, key) => [...acc, [key, obj[key]]], []);

console.log(objectPairs4({ a: 1, b: 2 }));
console.log(objectPairs4({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectParis4');

// point solution 5 - using Object.keys() and Array.forEach() methods

console.time('objectParis5');

const objectParis5 = (obj) => {
	const result = [];

	Object.keys(obj).forEach((key) => {
		result.push([key, obj[key]]);
	});

	return result;
};

console.log(objectParis5({ a: 1, b: 2 }));
console.log(objectParis5({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectParis5');

// point solution 6 - using for...of loop

console.time('objectParis6');

const objectParis6 = (obj) => {
	const result = [];

	for (const [key, value] of Object.entries(obj)) {
		result.push([key, value]);
	}
	return result;
};

console.log(objectParis6({ a: 1, b: 2 }));
console.log(objectParis6({ a: 1, b: 2, c: 3 }));

console.timeEnd('objectParis6');

console.log('------------- another problem -----------------');

// task : Get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.

// point solution 1 - using Array.prototype.find() method

console.time('coalesce1');

const coalesce = (...args) => args.find((_) => ![undefined, null].includes(_));

console.log(coalesce(null, undefined, '', NaN, 'Waldo'));
console.log(coalesce(null, undefined, NaN, '', 'Waldo'));
console.log(coalesce(undefined, null, NaN, '', 'Waldo'));

console.timeEnd('coalesce1');

// point solution 2 - using Array.prototype.some() method

console.time('coalesce2');

const coalesce2 = (...args) => args.some((_) => ![undefined, null].includes(_));

console.log(coalesce2(null, undefined, '', NaN, 'Waldo'));
console.log(coalesce2(null, undefined, NaN, '', 'Waldo'));
console.log(coalesce2(undefined, null, NaN, '', 'Waldo'));

console.timeEnd('coalesce2');

console.log('------------- another problem -----------------');

// task : Change function that accepts an array into a variadic function.

// todo : what is variadic function?
/// A variadic function is a function that accepts a variable number of arguments.

// point solution 1 - using spread operator

console.time('variadic1');

const variadic =
	(fn) =>
	(...args) =>
		fn(args);

variadic(console.log)(1, 2, 3); // [1, 2, 3]

console.timeEnd('variadic1');

// point solution 2 - using Array.prototype.reduce() method

console.time('variadic2');

const variadic2 =
	(fn) =>
	(...args) =>
		args.reduce(fn);

variadic2(console.log)(1, 2, 3); // [1, 2, 3]

console.timeEnd('variadic2');

// point solution 3 - using Array.prototype.forEach() method

console.time('variadic3');

const variadic3 =
	(fn) =>
	(...args) =>
		args.forEach(fn);

variadic3(console.log)(1, 2, 3); // [1, 2, 3]

console.timeEnd('variadic3');

console.log('------------- another problem -----------------');

// task : Remove falsey values from a given array.

// point solution 1 - using Array.prototype.filter() method

const compact = (arr) => arr.filter(Boolean);

console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])); // [ 1, 2, 3, 'a', 's', 34 ]
console.log(compact([false, NaN, 'e' * 23]));

// point solution 2 - using Array.prototype.reduce() method

const compact2 = (arr) =>
	arr.reduce((acc, cur) => (cur ? [...acc, cur] : acc), []);

console.log(compact2([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])); // [ 1, 2, 3, 'a', 's', 34 ]
console.log(compact2([false, NaN, 'e' * 23]));

// point solution 3 - using Array.prototype.forEach() method

const compact3 = (arr) => {
	const result = [];

	arr.forEach((_) => {
		if (_) {
			result.push(_);
		}
	});
	return result;
};

console.log(compact3([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])); // [ 1, 2, 3, 'a', 's', 34 ]
console.log(compact3([false, NaN, 'e' * 23]));

console.log('------------- another problem -----------------');
