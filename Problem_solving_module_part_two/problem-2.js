'use strict';
console.log('working...');

/*

2. Write a JavaScript program to find the largest value of five numbers. Using conditional statements.
Sample numbers: -8, -3, 0, -9, 1
Output: 1

*/

// point 1 : make a function that takes 5 numbers and returns a largest number

// solution 1 done here
function maxNumber(a, b, c, d, e) {
	let maxNumber = a;

	if (b > maxNumber) {
		maxNumber = b;
	}
	if (c > maxNumber) {
		maxNumber = c;
	}
	if (d > maxNumber) {
		maxNumber = d;
	}
	if (e > maxNumber) {
		maxNumber = e;
	}

	return maxNumber;
}

console.log(maxNumber(-8, -3, 0, -9, 1)); // / 1
console.log(maxNumber(-1, -1, -1, -1, -1)); // / -1

// solution 2 done here
function maxNumberSecondTry(maxNum) {
	let max = maxNum[0];

	for (let i = 1; i < maxNum.length; i++) {
		if (maxNum[i] > max) {
			max = maxNum[i];
		}
	}
	return max;
}

const test = [-8, -3, 0, -9, 1];
const test1 = [-1, -1, -1, -1, -1];
console.log(maxNumberSecondTry(test)); // 1
console.log(maxNumberSecondTry(test1)); // -1
