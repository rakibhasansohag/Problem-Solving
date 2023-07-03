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

console.log('-------------------- another problem ---------------------');
// task : Find all distinct prime factors of a given integer

// point : SOLUTION : 1 ( using nested loop )

console.time('SOLUTION :: 1');

const primeFactors = (num) => {
	function isPrime(num) {
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
	let result = [];

	for (let i = 2; i <= num; i++) {
		while (isPrime(i) && num % i === 0) {
			if (!result.includes(i)) {
				result.push(i);
			}

			num = num / i;
		}
	}

	return result;
};

console.log(primeFactors(100)); // [2, 5]
console.log(primeFactors(101)); // [101]
console.log(primeFactors(103)); // [103]
console.log(primeFactors(104)); // [2, 13]
console.log(primeFactors(105)); // [3, 5, 7]
console.timeEnd('SOLUTION :: 1');

// point : SOLUTION : 2 ( using recursion  )

console.time('SOLUTION :: 2');

const primeFactors2 = (num) => {
	let result = [];

	for (let i = 2; i <= num; i++) {
		while (num % i === 0) {
			if (!result.includes(i)) {
				result.push(i);
			}

			num = num / i;
		}
	}

	return result;
};

console.log(primeFactors2(100)); // [2, 5]
console.log(primeFactors2(101)); // [101]
console.log(primeFactors2(103)); // [103]
console.log(primeFactors2(104)); // [2, 13]

console.timeEnd('SOLUTION :: 2');

console.log('-------------------- another problem ---------------------');
/*
 task : Change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.


*/

// point : SOLUTION : 1 ( condition , loop and charCodeAt )

console.time('SOLUTION :: 1');

const changeChar = (str) => {
	let result = [];

	for (let i = 0; i < str.length; i++) {
		let characters = str.charCodeAt(i) - 'a'.charCodeAt(0);
		let newCharacters = 25 - characters + 'a'.charCodeAt(0);

		result.push(String.fromCharCode(newCharacters));
	}
	return result.join('');
};

console.log(changeChar('abcxyz')); // zyxabc
console.log(changeChar('python')); // kbgslm
console.log(changeChar('lmnop')); // onmlk

console.timeEnd('SOLUTION :: 1');

// point : SOLUTION : 2 ( using map and charCodeAt )

console.time('SOLUTION :: 2');

const changeChar2 = (str) => {
	return str
		.split('')
		.map((char) => {
			let characters = char.charCodeAt(0) - 'a'.charCodeAt(0);
			let newCharacters = 25 - characters + 'a'.charCodeAt(0);

			return String.fromCharCode(newCharacters);
		})
		.join('');
};

console.log(changeChar2('abcxyz')); // zyxabc
console.log(changeChar2('python')); // kbgslm
console.log(changeChar2('lmnop')); // onmlk

console.timeEnd('SOLUTION :: 2');
