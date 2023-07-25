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

console.log('------------ another problem -----------------');

// todo : Decapitalize the first letter of a string.

// point : solution  1 ( using slice() and toLowerCase() )

const Decapitalize = ([first, ...rest], upperRest = false) => {
	return (
		first.toLowerCase() +
		(upperRest ? rest.join('').toUpperCase() : rest.join(''))
	);
};

console.log(Decapitalize('Red')); // 'red'
console.log(Decapitalize('Red', true)); // 'rED'

// point : solution  2 ( using replace() and toLowerCase() )

const Decapitalize2 = ([first, ...rest], upperRest = false) => {
	return (
		first.replace(first, first.toLowerCase()) +
		(upperRest ? rest.join('').toUpperCase() : rest.join(''))
	);
};

console.log(Decapitalize2('Red')); // 'red'
console.log(Decapitalize2('Red', true)); // 'rED'
