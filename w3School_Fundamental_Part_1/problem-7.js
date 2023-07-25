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

console.log('------------ another problem -----------------');

// todo : Create a new array out of the two supplied by creating each possible pair from the arrays.

// point : solution  1 ( using reduce() and map() )

const xProd = (a, b) =>
	a.reduce((acc, x) => acc.concat(b.map((y) => [x, y])), []);

console.log(xProd([1, 2], ['a', 'b'])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
console.log(xProd([1, 2], [1, 2]));
console.log(xProd(['a', 'b'], ['a', 'b']));
console.log('--------------');
// point : solution 2 ( using for loop )

const xProd2 = (a, b) => {
	let arr = [];

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			arr.push([a[i], b[j]]);
		}
	}

	return arr;
};

console.log(xProd2([1, 2], ['a', 'b'])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
console.log(xProd2([1, 2], [1, 2]));
console.log(xProd2(['a', 'b'], ['a', 'b']));
console.log('--------------');

console.log('------------ another problem -----------------');

// todo : Return true if the string is y/yes other wise false.
// task : will have to use regexp => /^(y|yes)$/i : /^(n|no)$/i

// point : solution  1 ( using test() )

const yesNo = (val) => /^(y|yes)$/i.test(val);

console.log(yesNo('Y')); // true
console.log(yesNo('yes')); // true
console.log(yesNo('No')); // false
console.log(yesNo('Foo')); // false

// point : solution  2 ( using match() )

const yesNo2 = (val) => (val.match(/^(y|yes)$/i) ? true : false);

console.log(yesNo2('Y')); // true
console.log(yesNo2('yes')); // true
console.log(yesNo2('No')); // false
console.log(yesNo2('Foo')); // false

// point : solution  3 ( using includes() )

const yesNo3 = (val) => ['y', 'yes'].includes(val.toLowerCase());

console.log(yesNo3('Y')); // true
console.log(yesNo3('yes')); // true
console.log(yesNo3('No')); // false
console.log(yesNo3('Foo')); // false

console.log('------------ another problem -----------------');
