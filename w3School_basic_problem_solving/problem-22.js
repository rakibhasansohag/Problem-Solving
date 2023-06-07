'use strict ';

console.log('working....');

// task 22 : Create a new string from a given string taking the last 3 characters and added at both the front and back.

// point : solution 1

function newString(str) {
	if (str <= 3) {
		return str + str + str;
	} else {
		let lastThree = str.substring(str.length - 3);
		return lastThree + str + lastThree;
	}
}

console.log(newString('abc')); // abcabcabc
console.log(newString('abcdef')); // efabcdefef
console.log(newString('abcdefabc')); // abcabcdefabc
console.log(frontBack3('ab')); // false

// point : solution 2

function frontBack3(str) {
	if (str.length >= 3) {
		let back = str.substring(str.length - 3);
		return back + str + back;
	} else {
		return false;
	}
}
console.log('.....................................................');
console.log(frontBack3('abc')); // abcabcabc
console.log(frontBack3('abcdef')); // efabcdefef
console.log(frontBack3('abcdefabc')); // abcabcdefabc
console.log(frontBack3('ab')); // false
