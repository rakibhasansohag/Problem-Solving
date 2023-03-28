'use strict';
/*
Write a function that takes an array and returns a new array containing all the odd indexed elements from this array.
If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
In this problem. We will consider 0 as an odd number.

Example 1:
Input: [ 3, 6, 5, 4, 8, 10 ]
Output: [ “DEVZEROONE”, 3, 6, 4, 10 ]
Example 2:
Input: [ 0, 2, 4, 7, 9 ]
Output: [ 0, 2, 7 ]

Constraints:
Array length cannot be negative.


*/

// task :: solution  for this problem

// point 1 : A function that takes an array and returns a new array containing all the odd indexed elements from this array.

// point 2 : If the new array length is less than 3, add a new element “DEVZEROONE” at the last position of this new array.

// point 3 : If the new array length is greater than 3, add a new element “DEVZEROONE” at the first position of this new array.

// point 4:    In this problem, we will consider 0 as an odd number.

function oddIndexedElement(array) {
	if (array.length <= 0) {
		return ['Array length cannot be zero or negative'];
	}
	let result = [];
	for (let i = 1; i < array.length; i += 2) {
		if (i === 1 && array[i - 1] === 0) {
			result.push(array[i - 1]);
		}
		result.push(array[i]);
	}
	if (result.length < 3) {
		result.push('DEVZEROONE');
	} else if (result.length > 3) {
		result.unshift('DEVZEROONE');
	}
	return result;
}
// test data
const input = [3, 6, 5, 4, 8, 10];
const input1 = [0, 2, 4, 7, 9];
const input2 = [-1, 3, 5, 6, 7];
const input4 = [];
console.log(oddIndexedElement(input)); /// ['DEVZEROONE', 6, 4, 10]
console.log(oddIndexedElement(input1)); /// [ 0, 2, 7]
console.log(oddIndexedElement(input2)); /// [3, 6, 'DEVZEROONE']
console.log(oddIndexedElement(input4)); /// [array length can be negative]
