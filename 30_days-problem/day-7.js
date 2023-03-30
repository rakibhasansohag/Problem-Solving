'use strict';
console.log('working...');

/*
// task :
Write a JavaScript function that takes an array that contains string and integer elements, and returns a new array with only integer elements.
Example 1:
Input: [ 3, 6, “hello”, 4, “3”,  8]
Output: [ 3, 6,  4,  8]
Constraints:
Array length cannot be zero or negative.


*/
//  point : solution 1 by push method
function myFunc(array) {
	// if (array.length <= 0) {
	// 	console.log('array length must be positive');
	// }

	const output = [];

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number') {
			output.push(array[i]);
		}

		if (array[i] <= 0) {
			console.log('array must contain  positive numbers');
			return [];
		}
	}

	return output;
}

const input = [3, 6, 'hello', 4, '3', 8];
const input1 = [-3, -16, 'hello', 4, '3', 8];

console.log(myFunc(input)); /// [ 3, 6,  4,  8]
console.log(myFunc(input1)); /// error message

// point 2 : solution 2 by raw method

function myFunc1(array) {
	let output = [];
	let j = 0;

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number' && Number.isInteger(array[i])) {
			output[j] = array[i];
			j++;
		}
		if (array[i] <= 0) {
			console.log('array must contain  positive numbers');
			return [];
		}
	}
	return output;
}

console.log(myFunc1(input)); /// [ 3, 6,  4,  8]
console.log(myFunc1(input1)); /// error message

// task solve this problem by filter and splice

// point : 1 . 3..............
