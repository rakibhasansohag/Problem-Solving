'use strict';
console.log('working ....');

// task 13 : Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

// point : solution 1
function checkNumber(x, y) {
	return x === 50 || y === 50 || x + y === 50;
}

// / test data for solution 1
console.log(checkNumber(50, 50)); // true
console.log(checkNumber(20, 50)); // true
console.log(checkNumber(20, 20)); // false
console.log(checkNumber(20, 30)); // true
console.log(checkNumber(10, 20)); // false

// point : solution 2
function checkNumber1(x, y) {
	if (x === 50 || y === 50 || x + y === 50) {
		return true;
	} else {
		return false;
	}
}

// / test data for solution 2
console.log('...........................................................');
console.log(checkNumber1(50, 50)); // true
console.log(checkNumber1(20, 50)); // true
console.log(checkNumber1(20, 20)); // false
console.log(checkNumber1(20, 30)); // true
