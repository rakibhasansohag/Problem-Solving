'use strict';
console.log('working....');

// Task :Apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.

// Point: solution 1 :  using reduced method
const reduceSuccessive = (arr, fn, acc) =>
	arr.reduce(
		(res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),

		[acc],
	);

console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0)); // Output: [0, 1, 3, 6, 10, 15, 21]

// Point : solution 2 : without using built-in functions
const reduceSuccessive1 = (arr, fn, acc) => {
	let result = [acc];

	for (let i = 0; i < arr.length; i++) {
		acc = fn(acc, arr[i], i, arr);
		result.push(acc);
	}
	return result;
};

console.log('part 2');
console.log(reduceSuccessive1([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0)); // Output: [0, 1, 3, 6, 10, 15, 21]
