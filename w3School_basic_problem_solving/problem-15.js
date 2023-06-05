'use strict';

console.log('working...');

// task 15 : Check two given integers, whether one is positive and another one is negative

// point : solution 1

function checkPositiveNegative(x, y) {
	if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
		return true;
	} else {
		return false;
	}
}

// /test data for solution 1
console.log(checkPositiveNegative(12, 20)); // false
console.log(checkPositiveNegative(-12, 20)); // true
console.log(checkPositiveNegative(12, -20)); // true
console.log(checkPositiveNegative(-12, -20)); // false

// point : solution 2 with using Math.sign() method

function checkPositiveNegative2(x, y) {
	return Math.sign(x) === Math.sign(y);
}

// /test data for solution 2
console.log('...........................................................');
console.log(checkPositiveNegative2(12, 20)); // false
console.log(checkPositiveNegative2(-12, 20)); // true
console.log(checkPositiveNegative2(12, -20)); // true
console.log(checkPositiveNegative2(-12, -20)); // false
