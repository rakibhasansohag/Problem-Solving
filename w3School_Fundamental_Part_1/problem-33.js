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

console.log('----------------------------------------------------------------');

// Task : Write a JavaScript program to create an array of elements, grouped based on the position in the original array.

// Point : solution 1 : using math.max and apply()
const grouped = (...arrays) => {
	const maxLength = Math.max(...arrays.map((x) => x.length));

	return Array.from({ length: maxLength }).map((_, i) => {
		return Array.from({ length: arrays.length }, (_, j) => arrays[j][i]);
	});
};
console.log(grouped(['a', 'b'], [1, 2], [true, false]));
console.log(grouped(['a'], [1, 2], [true, false]));

// Point : solution 2 without using built-in functions
const grouped1 = (...args) => {
	let maxLength = 0;

	for (let i = 0; i < args.length; i++) {
		if (args[i].length > maxLength) {
			maxLength = args[i].length;
		}
	}

	const result = [];

	for (let i = 0; i < maxLength; i++) {
		const group = [];

		for (let j = 0; j < args.length; j++) {
			group[j] = i < args[j].length ? args[j][i] : undefined;
		}

		result[i] = group;
	}

	return result;
};

console.log(grouped1(['a', 'b'], [1, 2], [true, false]));
console.log(grouped1(['a'], [1, 2], [true, false]));

// Task : Write a JavaScript program to convert a given string into an array of words.

// Point : solution 1 : using split and filter
const convertWords = (str, pattern = /^a-zA-Z-]+/) =>
	str.split(pattern).filter(Boolean);

console.log(convertWords('I love javaScript!!'));
console.log(convertWords('javaScript', true, 324324));

// Point : solution 2 : using replace and split().filter();
const convertWords1 = (str) =>
	str
		.replace(/^a-zA-Z-]+/)
		.split(' ')
		.filter(Boolean);
console.log(convertWords1('I love javaScript!!'));
console.log(convertWords1('javaScript', true, 324324));

// Point : solution 3 : without using any built-in functions
const convertWords2 = (str) => {
	const result = [];
	let currentWord = '';
	let resultIndex = 0;

	for (let i = 0; i < str.length; i++) {
		const char = str[i].toLowerCase();

		if ((char >= 'a' && char <= 'z') || char === '-') {
			currentWord += str[i];
		} else if (currentWord.length > 0) {
			result[resultIndex] = currentWord;
			currentWord = '';
			resultIndex++;
		}
	}
	if (currentWord.length > 0) {
		result[resultIndex] = currentWord;
	}
	return result;
};

console.log(convertWords2('I love javaScript!!'));
console.log(convertWords2('javaScript', true, 324324));
