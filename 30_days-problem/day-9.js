'use strict ';

console.log('working....');

/*
Write a javaScript function countDigits  that takes a parameter as an integer and returns  the number of digits in this parameter.

Example 1:
Input: 59863
Output: 5

Constraints: 
You cannot change the type of value. Like, Cannot convert an integer into string.

*/
// / first solution
function countDigits(num) {
	for (let i = 0; i < num.length; i++) {
		return num.length;
	}
}
console.log(countDigits('hello'));
console.log(countDigits(59863));

//  / second solution

function countDigit(num) {
	if (num < 0) {
		num *= -1;
	}

	let count = 0;
	let divisor = 1;
	while (num / divisor >= 1) {
		count++;
		divisor *= 10;
	}
	return count;
}
console.log(countDigit('hello')); // output : 0
console.log(countDigit(59863)); /// Output: 5
console.log(countDigit(123456789)); /// Output: 9
console.log(countDigit(-9876)); /// Output: 4
