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

console.log('--------------- another problem -----------------');

// todo: Get every nth element in a given array.

// point : solution 1 ( using filter() )
const everyNth1 = (arr, nth) =>
	arr.filter((_, index) => index % nth === nth - 1);

console.log(everyNth1([1, 2, 3, 4, 5, 6], 1)); // [ 1,2,3,4,5,6 ]
console.log(everyNth1([1, 2, 3, 4, 5, 6], 2)); // [ 2, 4, 6 ]
console.log(everyNth1([1, 2, 3, 4, 5, 6], 3)); // [ 2, 4, 6 ]
console.log(everyNth1([1, 2, 3, 4, 5, 6], 4)); // [ 2, 4, 6 ]

// point : solution 2 ( using reduce() )
const everyNth2 = (arr, nth) =>
	arr.reduce(
		(cur, element, index) =>
			index % nth === nth - 1 ? [...cur, element] : cur,
		[],
	);

console.log(everyNth2([1, 2, 3, 4, 5, 6], 1)); // [ 1,2,3,4,5,6 ]
console.log(everyNth2([1, 2, 3, 4, 5, 6], 2)); // [ 2, 4, 6 ]
console.log(everyNth2([1, 2, 3, 4, 5, 6], 3)); // [ 2, 4, 6 ]
console.log(everyNth2([1, 2, 3, 4, 5, 6], 4)); // [ 2, 4, 6 ]

// point : solution 3 ( using for loop )
const everyNth3 = (arr, nth) => {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (i % nth === nth - 1) {
			result.push(arr[i]);
		}
	}
	return result;
};

console.log(everyNth3([1, 2, 3, 4, 5, 6], 1)); // [ 1,2,3,4,5,6 ]
console.log(everyNth3([1, 2, 3, 4, 5, 6], 2)); // [ 2, 4, 6 ]
console.log(everyNth3([1, 2, 3, 4, 5, 6], 3)); // [ 2, 4, 6 ]
console.log(everyNth3([1, 2, 3, 4, 5, 6], 4)); // [ 2, 4, 6 ]

// point: solution 4 ( using forEach() )
const everyNth4 = (arr, nth) => {
	let result = [];

	arr.forEach((element, index) => {
		if (index % nth === nth - 1) {
			result.push(element);
		}
	});

	return result;
};

console.log(everyNth4([1, 2, 3, 4, 5, 6], 1)); // [ 1,2,3,4,5,6 ]
console.log(everyNth4([1, 2, 3, 4, 5, 6], 2)); // [ 2, 4, 6 ]
console.log(everyNth4([1, 2, 3, 4, 5, 6], 3)); // [ 2, 4, 6 ]
console.log(everyNth4([1, 2, 3, 4, 5, 6], 4)); // [ 2, 4, 6 ]

// point : solution 5 ( using for of loop )

const everyNth5 = (arr, nth) => {
	let result = [];

	for (const [index, element] of arr.entries()) {
		if (index % nth === nth - 1) {
			result.push(element);
		}
	}
	return result;
};

console.log(everyNth5([1, 2, 3, 4, 5, 6], 1)); // [ 1,2,3,4,5,6 ]
console.log(everyNth5([1, 2, 3, 4, 5, 6], 2)); // [ 2, 4, 6 ]
console.log(everyNth5([1, 2, 3, 4, 5, 6], 3)); // [ 2, 4, 6 ]
console.log(everyNth5([1, 2, 3, 4, 5, 6], 4)); // [ 2, 4, 6 ]

console.log('--------------- another problem -----------------');
