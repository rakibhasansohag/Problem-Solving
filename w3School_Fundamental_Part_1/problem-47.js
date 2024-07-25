'use strict';
console.log('working.....');

// Task : Convert a number in bytes to a human-readable string

// Point : using conditional and toPrecision
const prettyBytes = (num, precision = 3, addSpace = true) => {
	const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + units[0];

	const exponent = Math.min(
		Math.floor(Math.log10(num < 0 ? -num : num) / 3),
		units.length - 1,
	);

	const n = Number((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(
		precision,
	);
	return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + units[exponent];
};
console.log(prettyBytes(1000)); // Output: 1 KB
console.log(prettyBytes(-27145424323.5821, 5)); // Output: -27.145 TB
console.log(prettyBytes(123456789, 3, false)); // Output: 123MB

console.log('another way ');
const prettyBytes1 = (bytes, precision = 3, addSpace = true) => {
	const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	if (Math.abs(bytes) < 1) return bytes + (addSpace ? ' ' : '') + units[0];

	const exponent = Math.floor(Math.log10(Math.abs(bytes)) / 3);
	const unit = units[exponent];
	const num = (bytes / Math.pow(1000, exponent)).toFixed(precision);

	return (bytes < 0 ? '-' : '') + num + (addSpace ? ' ' : '') + unit;
};
console.log(prettyBytes1(1000)); // Output: 1 KB
console.log(prettyBytes1(-27145424323.5821, 5)); // Output: -27.145 TB
console.log(prettyBytes1(123456789, 3, false)); // Output: 123MB
