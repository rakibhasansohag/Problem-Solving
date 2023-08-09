'use strict';
console.log('working....');

// task : Check whether all elements in a given array are equal or not.

// point  1 solution : using every() method

const checkEqual = (arr) => {
	return arr.every((val, i, arr) => val === arr[0]);
};

console.log(checkEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(checkEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true

// point : solution 2 : using for loop

const checkEqual2 = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[0]) {
			return false;
		}
	}
	return true;
};

console.log(checkEqual2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(checkEqual2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true

// point : solution 3 : using reduce() method

const checkEqual3 = (arr) => {
	return arr.reduce((acc, val) => {
		if (val !== acc) {
			return false;
		}
		return acc;
	});
};

console.log(checkEqual3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(checkEqual3([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true

// point : solution 4 : using filter() method

const checkEqual4 = (arr) => {
	return arr.filter((val) => val === arr[0]).length === arr.length;
};

console.log(checkEqual4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(checkEqual4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true
