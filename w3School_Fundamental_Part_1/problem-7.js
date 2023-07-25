'use strict';
console.log('working...');

// todo:  Filter out the non-unique values in an array, based on a provided comparator function.
// todo 1.1 : what is comparator function ?
// point 1.1: A comparator function is a function that compares two values. It can be used to sort an array of objects by multiple properties.

// point : solution  1 ( using filter and every() )

const filterNonUnique = (arr, fn) => {
	return arr.filter((v, i) =>
		arr.every((x, j) => (i === j) === fn(v, x, i, j)),
	);
};

console.log(
	filterNonUnique(
		[
			{ id: 0, value: 'a' },
			{ id: 1, value: 'b' },
			{ id: 2, value: 'c' },
			{ id: 1, value: 'd' },
			{ id: 0, value: 'e' },
		],
		(a, b) => a.id == b.id,
	),
);

// point : solution  2 ( using nested filter()  )

const filterNonUnique2 = (arr, fn) => {
	return arr.filter((v, i) => {
		return (
			arr.filter((x, j) => {
				return i !== j && fn(v, x);
			}).length === 0
		);
	});
};

console.log(
	filterNonUnique2(
		[
			{ id: 0, value: 'a' },
			{ id: 1, value: 'b' },
			{ id: 2, value: 'c' },
			{ id: 1, value: 'd' },
			{ id: 0, value: 'e' },
		],
		(a, b) => a.id == b.id,
	),
); // [ { id: 2, value: 'c' } ]

