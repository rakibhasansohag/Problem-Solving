'use strict';
console.log('working....');

/*
Write a javaScript function sumNumbers that takes a string. And find all numbers from this string and return the sum of those numbers.

Example 2:
Input: ‘‘afdafdf5fdfdf5fdfdf4fdfdf4fd’’
Output: 18
Example 2:
Input: “abc1dfddf4djfdrfdf8fdfd9”
Output: 22

Constraints: 
Number is not greater than or equal 10.

*/

// point : solution 1 : without using built - in
const sumNumbers = (str) => {
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= 0) {
			sum += parseInt(str[i]);
		}
	}
	return sum;
};

console.log(sumNumbers('afdafdf5fdfdf5fdfdf4fdfdf4fd')); /// 18

console.log(sumNumbers('abc1dfddf4djfdrfdf8fdfd9')); /// 22

console.log(sumNumbers('12dfds34fsdf56fsdf78dsfds9')); /// 45

console.log(
	'///////////////////////////////////////////////////////////////////////////////',
);
