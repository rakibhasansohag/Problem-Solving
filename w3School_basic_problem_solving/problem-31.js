'use strict';
console.log('working....');

// task : Check from two given non-negative integers that whether one of the number is multiple of 7 or 11

// point: solution 1
function valCheck(a, b) {
	if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
		return a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0;
	} else return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));

// point: solution 2

function valCheck2(a, b) {
	if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
		return a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0;
	} else return false;
}
console.log(valCheck2(14, 21));
console.log(valCheck2(14, 20));

// point: solution 3

function valCheck3(a, b) {
	if (!((a % 7 === 0 || a % 11 === 0) && (b % 7 === 0 || b % 11 === 0))) {
		return a % 7 === 0 || a % 11 === 0 || b % 7 === 0 || b % 11 === 0;
	} else return false;
}

// task : Check whether a given number presents in the range 40..10000

// point: solution 1
function valueCheck(x, y, z) {
	if (z < 40 || z > 10000) {
		return false;
	} else if (z >= x && z <= y) {
		return true;
	} else {
		return false;
	}
}
console.log('---------------range 40...10000-----------------');
console.log(valueCheck(40, 4000, 45));
console.log(valueCheck(80, 320, 79));
console.log(valueCheck(89, 4000, 30));

// point: solution 2

function valueCheck2(a, b, c) {
	if (c < 40 && c < 10000) {
		return false;
	} else if (c >= a && c <= b) {
		return true;
	} else {
		return false;
	}
}

console.log(valueCheck2(40, 4000, 45));
console.log(valueCheck2(80, 320, 79));
console.log(valueCheck2(89, 4000, 30));

// task  : Reverse a given string

// point: solution 1 ( using built in function)

function reverseString(str) {
	return str.split('').reverse().join('');
}
console.log(reverseString('JavaScript'));
console.log(reverseString('Python'));
console.log(reverseString('WWwW'));

// point: solution 2 ( using for loop)

function reverseString2(str) {
	let newString = '';

	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}
console.log(reverseString2('JavaScript'));
console.log(reverseString2('Python'));
console.log(reverseString2('WWwW'));

// task : Find the larger value from three given integers. However if two values are same, they will be considered as the larger value.

// point: solution 1

function largerValue(a, b, c) {
	if (a === b || b === c || c === a) {
		return 'They will be considered as the larger value';
	} else if (a > b && a > c) {
		return a;
	} else if (b > a && b > c) {
		return b;
	} else if (c > a && c > b) {
		return c;
	}
}

console.log(largerValue(1, 2, 3));
console.log(largerValue(1, 1, 3));
console.log(largerValue(1, 2, 2));

// point: solution 2

function largerValue2(a, b, c) {
	if (a === b || b === c || c === a) {
		return 'They will be considered as the larger value';
	} else if (a > b && a > c) {
		return a;
	} else if (b > c && b > a) {
		return b;
	} else if (c > a && c > b) {
		return c;
	}
}

console.log(largerValue2(1, 2, 3));
console.log(largerValue2(1, 1, 3));
console.log(largerValue2(1, 2, 2));
