'use strict';
console.log('working.......');

// task : write a javascript program to check from three given integers whether a number is greater than or equal to 20  . it is less than the others .

// point : solution 1 : with out using any built in function

const checkNumber = (a, b, c) => {
	if (a >= 20 && a > b && a > c) {
		return a;
	} else if (b >= 20 && b > a && b > c) {
		return b;
	} else if (c >= 20 && c > a && c > b) {
		return c;
	} else {
		return 'no number is greater than or equal to 20';
	}
};

console.log(checkNumber(20, 10, 30)); // / 30
console.log(checkNumber(10, 20, 30)); // / 30
console.log(checkNumber(10, 30, 20)); // / 30
console.log(checkNumber(10, 10, 10)); // / no number is greater than or equal to 20

// point : solution 2 : with using switch case

const checkNumber2 = (a, b, c) => {
	switch (true) {
		case a >= 20 && a > b && a > c:
			return a;
		case b >= 20 && b > a && b > c:
			return b;
		case c >= 20 && c > a && c > b:
			return c;
		default:
			return 'no number is greater than or equal to 20';
	}
};

console.log(checkNumber2(20, 10, 30)); // / 30
console.log(checkNumber2(10, 20, 30)); // / 30
console.log(checkNumber2(10, 30, 20)); // / 30
console.log(checkNumber2(10, 10, 10)); // / no number is greater than or equal to 20
