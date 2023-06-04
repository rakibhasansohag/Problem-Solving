'use strict';

console.log('working...');

// task 14 : Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.

// point : solution 1

function checkNumber(x) {
	if ((x >= 20 && x <= 100) || (x >= 20 && x <= 400)) {
		return true;
	} else {
		return false;
	}
}

// /test data for solution 1
console.log(checkNumber(12)); // false
console.log(checkNumber(20)); // true
console.log(checkNumber(100)); // true
console.log(checkNumber(200)); // false
console.log(checkNumber(400)); // true
console.log(checkNumber(500)); // false

// point : solution 2 with using Math.abs() method

function testHundred(x) {
	return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}

// /test data for solution 2
console.log('...........................................................');
console.log(testHundred(12)); // false
console.log(testHundred(90)); // true
console.log(testHundred(99)); // true
console.log(testHundred(199)); // false
console.log(testHundred(200)); // true
