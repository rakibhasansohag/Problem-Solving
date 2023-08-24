'use strict';
console.log('working...');

// task : Accepts a converging function and a list of branching functions.

// Returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

// Example: higher-order functions

const converge =
	(converger, fns) =>
	(...args) =>
		converger(...fns.map((fn) => fn.apply(null, args)));

const average = converge(
	(a, b) => a / b,
	[(arr) => arr.reduce((a, v) => a + v, 0), (arr) => arr.length],
);

console.log(average([6, 7])); // 6.5
console.log(average([1, 2, 3, 4, 5, 6, 7, 8])); // 4.5
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 5

// task : Group the elements of an array based on the given function and returns the count of elements in each group.

// point : solution 1 : using reduce

const countBy = (arr, fn) => {
	return arr
		.map(typeof fn === 'function' ? fn : (val) => val[fn])
		.reduce((acc, val) => {
			acc[val] = (acc[val] || 0) + 1;
			return acc;
		}, {});
};

console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // {4: 1, 6: 2}
console.log(countBy(['one', 'two', 'three'], 'length')); // {3: 2, 5: 1}
console.log(countBy([5.13, 3.4, 4.4], Math.sqrt));

// point : solution 2 : using forEach

const countBy2 = (arr, fn) => {
	const obj = {};
	arr.forEach((val) => {
		const prop = typeof fn === 'function' ? fn(val) : val[fn];
		obj[prop] = (obj[prop] || 0) + 1;
	});
	return obj;
};

console.log(countBy2([6.1, 4.2, 6.3], Math.floor)); // {4: 1, 6: 2}
console.log(countBy2(['one', 'two', 'three'], 'length')); // {3: 2, 5: 1}
console.log(countBy2([5.13, 3.4, 4.4], Math.sqrt));

// point :  solution 3 : using map

console.log('--------------- another problem -----------------');
//  task  : Count the occurrences of a value in an array

// point : solution 1 : using reduce

const countOccurrences = (arr, val) =>
	arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1)); // / 3
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2)); // / 2
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3)); // / 1

// point : solution 2 : using forEach

const countOccurrences2 = (arr, val) => {
	let count = 0;
	arr.forEach((v) => (v === val ? count++ : count));
	return count;
};

console.log(countOccurrences2([1, 1, 2, 1, 2, 3], 1)); // / 3
console.log(countOccurrences2([1, 1, 2, 1, 2, 3], 2)); // / 2
console.log(countOccurrences2([1, 1, 2, 1, 2, 3], 3)); // / 1

// point : solution 3 : using filter

const countOccurrences3 = (arr, val) => arr.filter((v) => v === val).length;

console.log(countOccurrences3([1, 1, 2, 1, 2, 3], 1)); // / 3
console.log(countOccurrences3([1, 1, 2, 1, 2, 3], 2)); // / 2
console.log(countOccurrences3([1, 1, 2, 1, 2, 3], 3)); // / 1

// point : solution 4 : using for loop

const countOccurrences4 = (arr, val) => {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) count++;
	}
	return count;
};

console.log(countOccurrences4([1, 1, 2, 1, 2, 3], 1)); // / 3
console.log(countOccurrences4([1, 1, 2, 1, 2, 3], 2)); // / 2
console.log(countOccurrences4([1, 1, 2, 1, 2, 3], 3)); // / 1

// point : solution 5 : using for of loop

const countOccurrences5 = (arr, val) => {
	let count = 0;

	for (const v of arr) {
		if (v === val) count++;
	}
	return count;
};

console.log(countOccurrences5([1, 1, 2, 1, 2, 3], 1)); // / 3
console.log(countOccurrences5([1, 1, 2, 1, 2, 3], 2)); // / 2
console.log(countOccurrences5([1, 1, 2, 1, 2, 3], 3)); // / 1

// point : solution 6 : using while loop

const countOccurrences6 = (arr, val) => {
	let count = 0;

	while (arr.includes(val)) {
		arr.splice(arr.indexOf(val), 1);
		count++;
	}
	return count;
};

console.log(countOccurrences6([1, 1, 2, 1, 2, 3], 1)); // / 3
console.log(countOccurrences6([1, 1, 2, 1, 2, 3], 2)); // / 2
console.log(countOccurrences6([1, 1, 2, 1, 2, 3], 3)); // / 1
