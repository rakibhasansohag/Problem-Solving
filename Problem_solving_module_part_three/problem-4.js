'use strict';
console.log('working.......');
// task : remove the spaces found in a string .

// point : solution 1 : with out using any built in function

const removeSpace = (str) => {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			newStr += str[i];
		}
	}
	return newStr;
};

console.log(removeSpace('    hello world      :) '));
console.log(removeSpace('    hello world      :) ').length);

// point : solution 2 : with using built in function ( regular expression and replace function )

const removeSpace2 = (str) => str.replace(/\s/g, '');

console.log(removeSpace2('    hello world      :) '));
console.log(removeSpace2('    hello world      :) ').length);
