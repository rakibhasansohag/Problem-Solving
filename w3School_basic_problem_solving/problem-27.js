'use strict';
console.log('working...');

// task 27.1 : Find the larger number from the two given positive integers

// point : solution 1 :

function largerNumber(num1, num2) {
	if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
		if (num1 === num2) {
			return 'Numbers are equal';
		} else if (num1 > num2) {
			return num1;
		} else {
			return num2;
		}
	} else {
		return 'Numbers are not in range';
	}
}

console.log(largerNumber(45, 60)); // 60
console.log(largerNumber(45, 30)); // Numbers are not in range
console.log(largerNumber(45, 45)); // Numbers are equal

// point solution 2 :

function largerNumber2(num1, num2) {
	if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
		return Math.max(num1, num2);
	} else {
		return 'Numbers are not in range';
	}
}
console.log(largerNumber2(45, 60)); // 60
console.log(largerNumber2(45, 30)); // Numbers are not in range
console.log(largerNumber2(45, 45)); // Numbers are equal condition problems

// task 27.2 : Find the larger number from the three given positive integers

// point : solution 1 :

function largerNumber2(num1, num2, num3) {
	if (
		num1 >= 40 &&
		num1 <= 60 &&
		num2 >= 40 &&
		num2 <= 60 &&
		num3 >= 40 &&
		num3 <= 60
	) {
		if (num1 === num2 && num2 === num3) {
			return 'Numbers are equal';
		} else if (num1 > num2 && num1 > num3) {
			return num1;
		} else if (num2 > num1 && num2 > num3) {
			return num2;
		} else {
			num3;
		}
	} else {
		return ' Numbers are not In range';
	}
}

console.log(largerNumber2(45, 60, 50)); // 60
console.log(largerNumber2(45, 30, 50)); // Numbers are not in range
console.log(largerNumber2(45, 45, 45)); // Numbers are equal

// point : solution 2 :

function largerNumber2(num1, num2, num3) {
	if (
		num1 >= 40 &&
		num1 <= 60 &&
		num2 >= 40 &&
		num2 <= 60 &&
		num3 >= 40 &&
		num3 <= 60
	) {
		return Math.max(num1, num2, num3);
	} else {
		return 'Numbers are not in range';
	}
}

console.log(largerNumber2(45, 60, 50)); // 60
console.log(largerNumber2(45, 30, 50)); // Numbers are not in range
console.log(largerNumber2(45, 45, 45)); // Numbers are equal
