'use strict';
console.log('working...');

/*

Write a function findIndex that takes an array of strings and a string as arguments. and return the index number of this string.
If cannot find the string return -1.

Example 1:
Input: [ “hello”, “blue”, ”green” ] , “blue”
Output: 1
Example 2:
Input: [ “hello”, “blue”, ”green” ] , “red”
Output: -1


*/

// point 1 : create a function that takes an array of string and string as arguments.
// point 2 : check by condition that array can not be negative or 0
// point 3 : set a for loop to search the array for the specified string

const input1 = ['hello', 'blue', 'green'];
const argument1 = 'blue';

const input2 = ['hello ', 'blue', 'green'];
const argument2 = 'red';

const input3 = ['hello ', 'blue', 'green'];
const argument3 = ['hello ', 'green', 'red'];

const input4 = [];
let argument4;
// / by raw coding without using any build in method
function findIndex(input, argument) {
	if (input.length <= 0) {
		return console.log('Array length cannot be zero or negative.');
	}

	for (let i = 0; i < input.length; i++) {
		if (input[i] === argument) {
			return i;
		}
	}
	return -1;
}

// task: test data 0
console.log(findIndex(input1, argument1)); /// 1
console.log(findIndex(input2, argument2)); /// -1
console.log(findIndex(input3, argument3)); /// not gonna work because it's looking for string in the array
console.log(findIndex(input4, argument4)); /// undefined

// / solution 2 by using findIndex (build-in method)

function findIndex1(input, argument) {
	if (input.length <= 0) {
		return undefined;
	}
	return input.indexOf(argument);
}

const findIndex2 = (input, argument) => {
	if (input.length <= 0) return undefined;
	return input.indexOf(argument);
};

// task: test data 1
console.log('--------- findIndex method-------');
console.log(findIndex1(input1, argument1)); /// 1
console.log(findIndex1(input2, argument2)); /// -1
console.log(findIndex1(input3, argument3)); /// not gonna work because it's looking for string in the array
console.log(findIndex1(input4, argument4)); ///

// task: test data 2
console.log('--------- findIndex easy-------');
console.log(findIndex2(input1, argument1)); /// 1
console.log(findIndex2(input2, argument2)); /// -1
console.log(findIndex2(input3, argument3)); /// not gonna work because it's looking for string in the array
console.log(findIndex2(input4, argument4)); ///
