'use strict';
console.log('working...');

// todo : Return the minimum-maximum value of an array, after applying the provided function to set comparing rule.

// point : solution 1  ( using Math.min() and Math.max()  )

function minMax(arr, func) {
	const transformedArr = arr.map(func);
	return [Math.min(...transformedArr), Math.max(...transformedArr)];
}

console.log(
	minMax([1, 2, 3, 4, 5], function (item) {
		return item * 2;
	}),
);

// point : solution 2  ( using reduce with comparator ( good way ) )

const minMax2 = (arr, comparator = (a, b) => a - b) => {
	return arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
};

// console.log(minMax2([1, 3, 2]));
// console.log(minMax2([10, 30, 20], (a, b) => b - a));
// console.log(
// 	minMax2(
// 		[
// 			{ name: 'Kevin', age: 16 },
// 			{ name: 'John', age: 20 },
// 			{ name: 'Ani', age: 19 },
// 		],
// 		(a, b) => a.age - b.age,
// 	),
// );

console.log('------------- another problem -----------------');

// todo : Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

// point : solution 1  ( using every() )

const all = (arr, fn = Boolean) => arr.every(fn);

console.log(all([4, 2, 3], (x) => x > 1));
console.log(all([4, 2, 3], (x) => x < 1));
console.log(all([1, 2, 3]));

// point : solution 2  ( using reduce() )

const all2 = (arr, fn = Boolean) => arr.reduce((a, b) => a && fn(b), true);

console.log(all2([4, 2, 3], (x) => x > 1));
console.log(all2([4, 2, 3], (x) => x < 1));
console.log(all2([1, 2, 3]));

console.log('------------- another problem -----------------');

// todo : Split values of two given arrays into two groups.

// point : solution 1  ( using reduce() and array.push() )

const bifurcate = (arr, filter) => {
	return arr.reduce(
		(acc, value, index) => (acc[filter[index] ? 0 : 1].push(value), acc),
		[[], []],
	);
};

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));

console.log(bifurcate([1, 2], [false, false]));
