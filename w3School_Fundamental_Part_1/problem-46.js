'use strict';
console.log('working....');

// Task :Apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.

// Point: solution 1 :  using reduced method
const reduceSuccessive = (arr, fn, acc) =>
	arr.reduce(
		(res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),

		[acc],
	);

console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0)); // Output: [0, 1, 3, 6, 10, 15, 21]

// Point : solution 2 : without using built-in functions
const reduceSuccessive1 = (arr, fn, acc) => {
	let result = [acc];

	for (let i = 0; i < arr.length; i++) {
		acc = fn(acc, arr[i], i, arr);
		result.push(acc);
	}
	return result;
};

console.log('part 2');
console.log(reduceSuccessive1([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0)); // Output: [0, 1, 3, 6, 10, 15, 21]

// Task : Get an array of lines from the specified file

const fs = require('fs');
const readFileLines = (filename) =>
	fs.readFileSync(filename).toString('UTF-8').split('\n');

const textArr = readFileLines('problem-1.js');
// console.log(textArr);

// Task : Mutate the original array to filter out the values specified, based on a given iterator function.
// Point : solution 1 : using filter function
const pullBy = (arr, ...args) => {
	const length = args.length;

	let fn = length > 1 ? args[length - 1] : undefined;
	fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;

	let argState = (Array.isArray(args[0]) ? args[0] : args).map((val) =>
		fn(val),
	);

	let pulled = arr.filter((v, i) => !argState.includes(fn(v)));

	arr.length = 0;
	pulled.forEach((v) => arr.push(v));
};

var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 5 }];
const filterArray = [{ x: 2 }, { x: 1 }];
console.log('my array 1', myArray);
// pullBy(myArray, filterArray, (o) => o.x);
console.log(myArray);

// Point : solution 2 : without using any built-in function
const pullBy1 = (arr, ...args) => {
	const length = args.length;

	let fn = length > 1 ? args[length - 1] : undefined;
	fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;

	let argState = [];
	if (Array.isArray(args[0])) {
		for (let i = 0; i < args[0].length; i++) {
			argState.push(fn(args[0][i]));
		}
	} else {
		for (let i = 0; i < args.length; i++) {
			argState.push(fn(args[i]));
		}
	}

	let i = 0;
	while (i < arr.length) {
		if (argState.includes(fn(arr[i]))) {
			arr.splice(i, 1);
		} else {
			i++;
		}
	}
};
pullBy1(myArray, filterArray, (x) => x.x);
console.log(myArray);

console.log('pulled out the specified data');
// Task :Mutate the original array to filter out the values specified

// Point  : using filter method
const pullAtValue = (arr, pullArr) => {
	let removed = [],
		pushToRemove = arr.forEach((v, i) =>
			pullArr.includes(v) ? removed.push(v) : v,
		),
		mutateTo = arr.filter((v, i) => !pullArr.includes(v));

	arr.length = 0;

	mutateTo.forEach((v) => arr.push(v));

	return removed;
};

let specifiedArray = ['a', 'b', 'c', 'd'];

console.log('Original data');
console.log(specifiedArray);
// let pulled = pullAtValue(specifiedArray, ['b', 'd']);
// Output: ['a', 'c']
console.log('Pulled data');
// console.log(pulled); // Output: ['b', 'd']

// Point : without using any built-in function
const pullAtValue1 = (arr, pullArr) => {
	let removed = [];
	let i = 0;

	while (i < arr.length) {
		let shouldRemove = false;

		for (let j = 0; j < pullArr.length; j++) {
			if (arr[i] === pullArr[j]) {
				shouldRemove = true;
				removed.push(arr[i].trim());
				break;
			}
		}

		if (shouldRemove) {
			arr.splice(i, 1);
		} else {
			i++;
		}
	}
	return removed;
};

const pullFilter = pullAtValue1(specifiedArray, ['b', 'd', ', ']);
console.log(pullFilter);
