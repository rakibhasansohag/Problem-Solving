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
