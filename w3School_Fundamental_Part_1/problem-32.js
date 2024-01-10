'use strict';
console.log('working...');

// task : Write a JavaScript program to hash an given input string into a whole number.

// Point : solution 1 : using reduce and charCodeAt
const hashPassword = (str) => {
	let arr = str.split('');

	return arr.reduce(
		(hashCode, currentValue) =>
			(hashCode =
				currentValue.charCodeAt(0) +
				(hashCode << 6) +
				(hashCode << 16) -
				hashCode),
		0,
	);
};

console.log(hashPassword('w3r')); // output : 986464758
console.log(hashPassword('Name')); // output : 403285176

// Point : solution 2 : using for loop and charCodeAt
const hashPassword1 = (str) => {
	let hash = 0;

	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		hash = hash * 16 + charCode;
	}
	return hash;
};
console.log(hashPassword1('w3r'));
console.log(hashPassword1('Name'));
