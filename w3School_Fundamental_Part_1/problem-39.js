'use strict';
console.log('working...');

// task : Write a JavaScript program to add an ordinal suffix to a number.

// Point : solution using module 0perator  parseInt and oPattern, tPattern way
const toOrdinalSuffix = (num) => {
	const int = parseInt(num);
	const digits = [int % 10, int % 100];
	const ordinals = ['st', 'nd', 'rd', 'th'];
	const oPattern = [1, 2, 3, 4];
	const tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];

	return oPattern.includes(digits[0] && !tPattern.includes(digits[1]))
		? int + ordinals[digits[0] - 1]
		: int + ordinals[3];
};

console.log(toOrdinalSuffix('1'));
console.log(toOrdinalSuffix('4'));
console.log(toOrdinalSuffix('50'));
console.log(toOrdinalSuffix('123'));

// Point : solve this problem using more simple way
const toOrdinalSuffix1 = (num) => {
	const int = parseInt(num);
	if (isNaN(int)) return '';

	const lastTwoDigits = int % 100;
	const lastDigits = int % 10;

	if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return int + 'th';

	switch (lastDigits) {
		case 1:
			return int + 'st';
		case 2:
			return int + 'nd';
		case 3:
			return int + 'rd';
		default:
			return int + 'th';
	}
};
console.log('----------------------------------------------------------------');
console.log(toOrdinalSuffix1('1'));
console.log(toOrdinalSuffix1('4'));
console.log(toOrdinalSuffix1('50'));
console.log(toOrdinalSuffix1('123'));

//  Point : solving the problem by dividing the number  by 10 until it's reach a single-digit number.

const toOrdinalSuffix2 = (num) => {
	const int = parseInt(num);
	if (isNaN(int)) return '';

	const getSuffixRecursive = (n) => {
		if (n < 10) {
			if (n === 1) return 'st';
			if (n === 2) return 'nd';
			if (n === 3) return 'rd';
			return 'th';
		}

		return getSuffixRecursive(n % 10);
	};
	return int + getSuffixRecursive(int);
};

console.log(toOrdinalSuffix2('1'));
console.log(toOrdinalSuffix2('4'));
console.log(toOrdinalSuffix2('50'));
console.log(toOrdinalSuffix2('123'));
console.log('------- problem 2 -------');

// task : Write a JavaScript program to convert a string to kebab case.
// what is kabab case ?
// /  kabab case also known as hypen case, it involves writing compound words in lowercase letters and separating them with hypens(-). it commonly used in naming files,  URLs and css classes n web development.

// point : solution using regex  (/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
const toKebabCase = (str) =>
	str &&
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map((x) => x.toLowerCase())
		.join('-');

console.log(toKebabCase('camelCase'));
console.log(toKebabCase('some text'));
console.log(
	toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'),
);
console.log(toKebabCase('AllThe-small Things'));
console.log(
	toKebabCase(
		'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML',
	),
);

// Point : using simple way
const toKebabCase1 = (str) => {
	const words = str.match(/[A-Z]*[a-z]+|[0-9]+/g);
	return words ? words.join('-').toLowerCase() : '';
};

console.log('--------------------------------');
console.log(toKebabCase1('camelCase'));
console.log(toKebabCase1('some text'));
console.log(
	toKebabCase1('some-mixed_string With spaces_underscores-and-hyphens'),
);
console.log(toKebabCase1('AllThe-small Things'));
console.log(
	toKebabCase1(
		'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML',
	),
);
