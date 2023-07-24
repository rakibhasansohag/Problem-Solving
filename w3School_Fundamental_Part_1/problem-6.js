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

// todo : Filter out the non-unique values in an array.

// point :  solution 1 ( using filter() and indexOf() with lastIndexOf() )
console.time('filterNonUnique1 with indexOf() and lastIndexOf()');
const filterNonUnique1 = (arr) =>
	arr.filter((element) => arr.indexOf(element) === arr.lastIndexOf(element));

console.log(filterNonUnique1([1, 2, 2, 3, 4, 4, 5])); // [ 1, 3, 5 ]
console.log(filterNonUnique1([1, 2, 3, 4])); // [ 1, 2, 3, 4 ]
console.log(filterNonUnique1([1, 1, 1, 2, 2])); // []
console.timeEnd('filterNonUnique1 with indexOf() and lastIndexOf()');

// point : solution 2 ( using filter() and Set() )
console.time('filterNonUnique2 with Set()');
const filterNonUnique2 = (arr) => {
	let set = {};

	arr.forEach((element) => {
		set[element] = (set[element] || 0) + 1;
	});

	return arr.filter((element) => set[element] === 1);
};

console.log(filterNonUnique2([1, 2, 2, 3, 4, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(filterNonUnique2([1, 2, 3, 4])); // [ 1, 2, 3, 4 ]
console.log(filterNonUnique2([1, 1, 1, 2, 2])); // [  ]
console.timeEnd('filterNonUnique2 with Set()');

// point : solution 3 ( using filter() and reduce() )
console.time('filterNonUnique3 with reduce()');
const filterNonUnique3 = (arr) => {
	return arr.filter(
		(element) =>
			arr.reduce((cur, ele) => (ele === element ? cur + 1 : cur), 0) === 1,
	);
};

console.log(filterNonUnique3([1, 2, 2, 3, 4, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(filterNonUnique3([1, 2, 3, 4])); // [ 1, 2, 3, 4 ]
console.log(filterNonUnique3([1, 1, 1, 2, 2])); // [  ]
console.timeEnd('filterNonUnique3 with reduce()');

// point : solution 4 ( using filter() and forEach() )
console.time('filterNonUnique4 with forEach()');
const filterNonUnique4 = (arr) => {
	let result = [];

	arr.forEach((element) => {
		if (arr.indexOf(element) === arr.lastIndexOf(element)) {
			result.push(element);
		}
	});
	return result;
};

console.log(filterNonUnique4([1, 2, 2, 3, 4, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(filterNonUnique4([1, 2, 3, 4])); // [ 1, 2, 3, 4 ]
console.log(filterNonUnique4([1, 1, 1, 2, 2])); // [  ]
console.timeEnd('filterNonUnique4 with forEach()');

// point : solution 5 ( using filter() and for of loop )
console.time('filterNonUnique5 with for of loop ');
const filterNonUnique5 = (arr) => {
	let result = [];

	for (const element of arr) {
		if (arr.indexOf(element) === arr.lastIndexOf(element)) {
			result.push(element);
		}
	}
	return result;
};

console.log(filterNonUnique5([1, 2, 2, 3, 4, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(filterNonUnique5([1, 2, 3, 4])); // [ 1, 2, 3, 4 ]
console.log(filterNonUnique5([1, 1, 1, 2, 2])); // [  ]
console.timeEnd('filterNonUnique5 with for of loop ');

// point : solution 6 ( using filter() and for loop )
console.time('filterNonUnique6 with for loop ');

const filterNonUnique6 = (arr) => {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
			result.push(arr[i]);
		}
	}

	return result;
};

console.log(filterNonUnique6([1, 2, 2, 3, 4, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(filterNonUnique6([1, 2, 3, 4])); // [ 1, 2, 3, 4 ]
console.log(filterNonUnique6([1, 1, 1, 2, 2])); // [  ]
console.timeEnd('filterNonUnique6 with for loop ');

// point : solution 7 ( with out using any built-in methods )
console.time('filterNonUnique7 with out built-in methods ');
const filterNonUnique7 = (arr) => {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		let count = 0;

		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++;
			}

			if (count > 1) {
				break;
			}

			if (j === arr.length - 1 && count === 1) {
				result.push(arr[i]);
			}
		}
	}
	return result;
};

console.log(filterNonUnique7([1, 2, 2, 3, 4, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(filterNonUnique7([1, 2, 3, 4])); // [ 1, 2, 3, 4 ]
console.log(filterNonUnique7([1, 1, 1, 2, 2])); // [  ]
console.timeEnd('filterNonUnique7 with out built-in methods ');
