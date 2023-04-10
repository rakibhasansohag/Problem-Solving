'use strict';
console.log('working...');

/*

Write a javaScript function that takes an integer and make a pattern for this number.
Example 1:
Input: 5
Output: 
5
55
555
5555
55555
5555
555
55
5

Example 1:
Input: 3
Output: 
3
33
333
33
3 
Constraints: 
Input  is not greater than or equal 10.

*/

function makePattern(num) {
	let result = '';
	//  first loop for the first half of the pattern
	for (let i = 0; i <= num; i++) {
		for (let j = 0; j < i; j++) {
			result += num;
		}
		result += '\n';
	}
	// second loop for the second half of the pattern
	for (let i = num - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			result += num;
		}
		result += '\n';
	}
	return result;
}

console.log(makePattern(5)); /// 5
console.log(makePattern(2)); /// 2
console.log(makePattern(' * ')); // error
console.log(makePattern('hello ')); // error
