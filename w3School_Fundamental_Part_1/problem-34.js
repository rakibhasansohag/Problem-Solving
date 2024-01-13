'use strict';
console.log('working...');

// task : Write a JavaScript program that returns true if the given value is a number, false otherwise.

// Point : solution 1 : using isNaN, isFinite and typeof properties
const validateNumber = (value) =>
	!isNaN(parseFloat(value)) && isFinite(value) && typeof value !== 'boolean';

console.log(validateNumber('200'));
console.log(validateNumber('10'));
console.log(validateNumber('abc'));
console.log(validateNumber('-.23432'));

// point : solution 2 : using regular expression
const validateNumber1 = (value) => {
	const numberRegex = /^[-+]?(?:\d*\.\d+|\d+)$/;
	return numberRegex.test(value) && typeof +value === 'number';
};
console.log(validateNumber1('200'));
console.log(validateNumber1('10'));
console.log(validateNumber1('abc'));
console.log(validateNumber1('-.23432'));
