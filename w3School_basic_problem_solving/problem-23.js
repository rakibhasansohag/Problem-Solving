'use strict';
console.log('working....');

// task 23 : Check if a string starts with 'Java' and false otherwise.

function newString(str) {
	if (str.length > 4) {
		return false;
	} else {
		let frontBack3 = str.substring(0, 4);

		if (frontBack3 === 'Java') {
			return true;
		} else {
			return false;
		}
	}
}
console.log(newString('JavaScript')); // true
console.log(newString('Java')); // true
console.log(newString('Python')); // false
console.log(newString('JavaScripts')); // false

// task: problem-24.js : Check whether two given integer values are in the range 50..99

function checkNumbers(x, y) {
	if (x >= 50 && x <= 99 && y >= 50 && y <= 99) {
		return true;
	} else {
		return false;
	}
}
console.log('...........................checkNumbers.........');
console.log(checkNumbers(12, 101)); // false
console.log(checkNumbers(52, 80)); // true

// task : problem 25 : Check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range otherwise false.

function checkNumbers3(x, y, z) {
	if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
		return true;
	} else {
		return false;
	}
}

console.log('...........................checkNumbers3.........');
console.log(checkNumbers3(12, 101, 88)); // true
console.log(checkNumbers3(52, 80, 99)); // true
console.log(checkNumbers3(5, 5, 199)); //false

// task : problem 26 : Check whether a string "Script" presents at 5th (index 4) position in a given string

function checkString(str) {
	if (str.length < 6) {
		return str;
	}

	let resultString = str;

	if (str.substring(10, 4) === 'Script') {
		resultString = str.substring(0, 4) + str.substring(10, str.length);
	} else {
		resultString = str;
	}
	return resultString;
}

console.log('...........................checkString.........');
console.log(checkString('JavaScript')); // JavaScript
console.log(checkString('CoffeeScript')); // CoffeeScript
