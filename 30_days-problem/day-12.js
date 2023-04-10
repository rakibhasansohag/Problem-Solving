'use strict';

console.log('working...');

/*

Write a function lowestNumber that takes an array of a number and returns the 3rd lowest number in the array.
Example 1:
Input: [1, 2, 3, 6, 5, 4, 8, 10 ]
Output: 3
Example 2:
Input: [ 3, 6, 5, 4, 8, 10 ]
Output: 5

Constraints: 
Please avoid any kind of built-in feature for now.

*/

// point : solution 1 without using built-in function

const lowestNumber = (arr) => {
	if (!Array.isArray(arr) || arr.length < 3) {
		return console.log('Input array must have at least 3 elements.');
	}

	let min = arr[0];
	let secondMin = arr[1];
	let thirdMin = arr[2];

	for (let i = 0; i < arr.length; i++) {
		let currentMin = arr[i];
		if (arr[i] < min) {
			thirdMin = secondMin;
			secondMin = min;
			min = currentMin;
		} else if (currentMin < secondMin) {
			thirdMin = secondMin;
			secondMin = currentMin;
		} else if (currentMin < thirdMin) {
			thirdMin = currentMin;
		}
	}
	return thirdMin;
};

console.log(lowestNumber([1, 2, 3, 6, 5, 4, 8, 10])); // output 3

console.log(lowestNumber([3, 6])); // error

console.log(lowestNumber([1, 2, 3, 6, 5, 4, 8, 10])); // output 3

console.log(lowestNumber([3, 6, 5, 4, 8, 10])); // output 5

////////////////////////////////////////////////////////////////
// point : solution 2 using built-in function

const lowestNumber2 = (arr) => {
	if (!Array.isArray(arr) || arr.length < 3) {
		return console.log('input array must have at least 3 elements');
	}
	const result = arr.sort((a, b) => a - b);
	return result[2];
};
console.log('...............................');
console.log(lowestNumber2([1, 2, 3, 6, 5, 4, 8, 10])); // output 3
console.log(lowestNumber2([3, 6])); // error
console.log(lowestNumber2([3, 6, 5, 4, 8, 10])); // output 5
