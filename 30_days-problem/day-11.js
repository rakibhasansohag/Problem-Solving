'use strict';
console.log('working...');

/*
Task : Write a javaScript function countZero to count the number of zeros in 2D Array and it returns the total number of Zeros.
Example 1:
Input: [[1,0,1],[5,6,6],[0,8,0]]
Output: 3
Example 2:
Output: 4

Constraints: 
Cannot use any built-in function.


*/

// /  solution 1
const Input = [
	[1, 0, 2, 1, 0],
	[2, 2, 6, 0, 0],
	[8, 0, 8, 1, 0],
];
const countZero = function (arr) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === 0) count++;
		}
	}
	return count; // return the total number of zeros
};

console.log(countZero('hello')); // error 0
console.log(countZero(5)); // error 0
console.log(
	countZero([
		[1, 0, 1],
		[5, 6, 6],
		[0, 8, 0],
	]),
); // output 3

console.log(countZero(Input)); // output 6

// //////////////////////////////////////////////////////////////////////////////

//  point : solution 2
const countFive = (arr) => {
	let count = 0;
	if (!Array.isArray(arr) || arr.length === 0 || !Array.isArray(arr[0])) {
		return console.log('need positive value');
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === 5) count++;
		}
	}
	return count;
};

console.log(countFive('hello')); // error 0
console.log(countFive(Input)); //
console.log(
	countFive([
		[1, 0, 1],
		[5, 6, 6],
		[0, 8, 0],
	]),
); // output 1
