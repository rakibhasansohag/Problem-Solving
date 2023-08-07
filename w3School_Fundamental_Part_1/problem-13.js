'use strict';
console.log('working...');

// task : Convert an integer to a suffixed string, adding am or pm based on its value.

// point solution 1  - using ternary operator

const convertTime = (num) => {
	return num === 0 || num === 24
		? 12 + 'am'
		: num === 12
		? 12 + 'pm'
		: num < 12
		? (num % 12) + 'am'
		: (num % 12) + 'pm';
};

console.log(convertTime(0));
console.log(convertTime(11));
console.log(convertTime(13));
console.log(convertTime(25));

// point solution 2  - using if else statement

const convertTime2 = (num) => {
	if (num === 0 || num === 24) {
		return 12 + 'am';
	} else if (num === 12) {
		return 12 + 'pm';
	} else if (num < 12) {
		return (num % 12) + 'am ';
	} else if (num > 12) {
		return (num % 12) + 'pm';
	} else {
		return 'invalid input :(';
	}
};

console.log(convertTime2(0));
console.log(convertTime2(11));
console.log(convertTime2(13));
console.log(convertTime2(25));

// point solution 3  - using switch statement

const convertTime3 = (num) => {
	switch (num) {
		case 0:
		case 24:
			return 12 + 'am';
		case 12:
			return 12 + 'pm';
		default:
			return num < 12 ? (num % 12) + 'am' : (num % 12) + 'pm';
	}
};
console.log('...............');
console.log(convertTime3(0));
console.log(convertTime3(11));
console.log(convertTime3(13));
console.log(convertTime3(25));
