'use strict';
console.log('working....');

// task : problem 27 : Find the largest of three given integers

// point : solution 1

function maxOfThree(x, y, z) {
	let maxValue = 0;

	if (x > y) {
		maxValue = x;
	} else {
		maxValue = y;
	}

	if (z > maxValue) {
		maxValue = z;
	}

	return maxValue;
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(0, -110, -10));

// point : solution 2

function maxOfThree2(x, y, z) {
	let maxValue = 0;

	if (x > y && x > z) {
		maxValue = x;
	} else if (y > x && y > z) {
		maxValue = y;
	} else {
		maxValue = z;
	}
	return maxValue;
}

console.log(maxOfThree2(1, 2, 3));
console.log(maxOfThree2(0, -110, -10));

// point : solution 3

function maxOfThree3(x, y, z) {
	let maxValue = 0;

	if (x > y) {
		if (x > z) {
			maxValue = x;
		} else {
			maxValue = z;
		}
	} else {
		if (y > z) {
			maxValue = y;
		} else {
			maxValue = z;
		}
	}
	return maxValue;
}

console.log(maxOfThree3(1, 2, 3));
console.log(maxOfThree3(0, -110, -10));
