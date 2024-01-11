'use strict';
console.log('working...');

// Task : Write a JavaScript program to return the object associating the properties to the values of a given array of valid property identifiers and an array of values.

// Point : solution 1 : using  reduce formula to reduce
const validProperties = (props, values) =>
	props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});

console.log(validProperties(['a', 'b', 'c'], [1, 2]));
console.log(validProperties(['a', 'b'], [1, 2, 3]));
console.log(validProperties(['a', 'b', 'c'], [1, 2, 3]));

// Point : solution 2 : without built-in functions
const validProperties1 = (props, values) => {
	const result = {};

	for (let i = 0; i < Math.min(props.length, values.length); i++) {
		result[props[i]] = values[i];
	}
	return result;
};

console.log(validProperties1(['a', 'b', 'c'], [1, 2]));
console.log(validProperties1(['a', 'b'], [1, 2, 3]));
console.log(validProperties1(['a', 'b', 'c'], [1, 2, 3]));
