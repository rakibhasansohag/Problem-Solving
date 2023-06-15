'use strict';
console.log('working....');

// task : Extract the first half of a string of even length

// point : solution 1

// function firstHalf(str) {
// 	if (str.length % 2 === 0) {
// 		return str.slice(0, str.length / 2);
// 	} else {
// 		return str;
// 	}
// }

function firstHalf(str) {
	if (str.length % 2 === 0) {
		return str.slice(0, str.length / 2);
	} else {
		return str;
	}
}

console.log(firstHalf('Python'));
console.log(firstHalf('JavaScript'));
console.log(firstHalf('PHP'));

// task : Create a new string without the first and last character of a given string

// point : solution 1

// function withoutFirstEnd(str) {
// 	return str.slice(1, str.length - 1);
// }

function withoutFirstEnd(str) {
	return str.substring(1, str.length - 1);
}

console.log(withoutFirstEnd('JavaScript'));
console.log(withoutFirstEnd('JS'));
console.log(withoutFirstEnd('PHP'));

// task : Concatenate two strings except their first character

// point : solution 1

function concatenate(str1, str2) {
	let string1 = str1.substring(1, str1.length);
	let string2 = str2.slice(1, str2.length);

	return string1 + string2;
}

console.log(concatenate('Python', 'JS'));
console.log(concatenate('ab', 'cdef'));

// task : Move last three character to the start of a specified string

// function lastThree(str) {
// 	if (str.length > 1) {
// 		return str.slice(-3) + str.slice(0, -3);
// 	} else {
// 		return str;
// 	}
// }

function lastThree(str) {
	if (str.length > 1) {
		return str.substring(str.length - 3) + str.substring(0, str.length - 3);
	}
	return str;
}

console.log(lastThree('Python'));
console.log(lastThree('JavaScript'));
console.log(lastThree('Hi'));
