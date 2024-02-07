'use strict';
console.log('working...');

// Task : Write a JavaScript program to create tomorrow's date in a string representation.

// Point : solution using Date format
const tomorrow = (long = false) => {
	let t = new Date();

	t.setDate(t.getDate() + 1);

	const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(
		2,
		'0',
	)}-${String(t.getDate()).padStart(2, '0')}`;

	return !long ? ret : `${ret}T00:00:00`;
};

console.log(tomorrow());
console.log(tomorrow(true));

// Point : using 24 hours format
const tomorrow1 = (long = false) => {
	let today = new Date();
	let tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000); // Add 24 hours in milliseconds

	const ret = `${tomorrow.getFullYear()}-${String(
		tomorrow.getMonth() + 1,
	).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;

	return !long ? ret : `${ret}T00:00:00`;
};

console.log(tomorrow1());
console.log(tomorrow1(true));

// TASK : Write a JavaScript program to convert a string to snake case.
// Point : solution 1 : solve using regex pattern

const toSnakeCase = (str) =>
	str &&
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map((x) => x.toLowerCase())
		.join('_');

console.log(toSnakeCase('camelCase'));
console.log(toSnakeCase('some text'));
console.log(
	toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'),
);
console.log(toSnakeCase('AllThe-small Things'));
console.log(
	toSnakeCase(
		'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML',
	),
);

// point : using replace
const toSnakeCase1 = (str) => {
	return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => '_' + chr.toLowerCase());
};

console.log(toSnakeCase1('camelCase'));
console.log(toSnakeCase1('some text'));
console.log(
	toSnakeCase1('some-mixed_string With spaces_underscores-and-hyphens'),
);
console.log(toSnakeCase1('AllThe-small Things'));
console.log(
	toSnakeCase1(
		'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML',
	),
);
