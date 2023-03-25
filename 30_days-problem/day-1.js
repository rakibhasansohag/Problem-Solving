'use strict';

// Todo: Question 1: Write a JavaScript Function   printNumber that takes an integer N and prints all the numbers between 0 to N.
// Example:
// Input: 5
// Output: 0 1 2 3 4 5
// Constriction:
// 0 < N

// ***** answer:
// first solution
function printNumber(N) {
	if (N < 0) {
		console.log('error N must be greater than 0');
		return;
	} else {
		for (let i = 0; i < N; i++) {
			console.log(i);
			// answer will be vertical
		}
	}
}

printNumber(3);

//  second solution is to horizontally
const printNumbers = (n) => {
	if (n < 0) {
		console.log('n must be greater than 0');
		return;
	}

	let horizontally = '';

	for (let i = 0; i <= n; i++) {
		horizontally += i + ' ';
	}

	console.log(horizontally);
};

printNumbers(3);
