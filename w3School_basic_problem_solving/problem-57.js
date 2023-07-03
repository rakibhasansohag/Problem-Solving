'use strict';

console.log('working...');

/*
 task : Write a JavaScript program to check whether a given fraction is proper or not.

/Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.

*/

// point : SOLUTION : 1 ( condition )

console.time('SOLUTION :: 1');

const properFraction = (numerator, denominator) => {
	let result = 0;

	if (numerator < denominator) {
		result = 1;
	} else {
		result = 0;
	}

	return result;
};

console.log(properFraction(12, 13)); // 1
console.log(properFraction(12, 30)); // 1

console.timeEnd('SOLUTION :: 1');

// point : SOLUTION : 2 ( using nested loop )

console.time('SOLUTION :: 2');

const properFraction2 = (numerator, denominator) => {
	let result = 0;

	for (let i = 0; i < denominator; i++) {
		for (let j = 0; j < numerator; j++) {
			if (i / j < 1) {
				result = 1;
			} else {
				result = 0;
			}
		}
	}

	return result;
};

console.log(properFraction2(12, 13));
console.log(properFraction2(12, 30));

console.timeEnd('SOLUTION :: 2');
