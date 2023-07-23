'use strict';
console.log('working....');

// todo : Extend a 3-digit color code to a 6-digit color code

// point : solution 1 ( using map() )

const extendHex1 = (shortHex) =>
	'#' +
	shortHex
		.slice(shortHex.startsWith('#') ? 1 : 0)
		.split('')
		.map((x) => x + x)
		.join('');

console.log(extendHex1('#03f')); // #0033ff
console.log(extendHex1('05a')); // #0055aa

// point : solution 2 ( using replace() )

const extendHex2 = (shortHex) =>
	'#' +
	shortHex.slice(shortHex.startsWith('#') ? 1 : 0).replace(/./g, (x) => x + x);

console.log(extendHex2('#03f')); // #0033ff
console.log(extendHex2('05a')); // #0055aa
