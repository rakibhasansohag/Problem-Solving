'use strict';
console.log('working........');

// task : Write a JavaScript program to negates a predicate function.
// todo : what is  negates a predicate function ?
// / In JavaScript, negating a predicate function means obtaining the opposite result of the original function.

// Point : solution 1
const negate =
	(prep) =>
	(...args) =>
		!prep(...args);
console.log([1, 2, 3, 4, 5].filter(negate((n) => n % 2 === 0)));

// Point : solution 2
const isOdd = (n) => n % 2 !== 0;
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);
