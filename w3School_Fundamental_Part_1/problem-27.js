'use strict';

// Task: Write a JavaScript program to get the median of an array of numbers.

// todo: what is median of numbers ?
// / answer: median of numbers is The median is the middle number in a sorted list of numbers

// Point: solution 1 ( using sort method )
const median = (arr) => {
	const mid = Math.floor(arr.length / 2),
		nums = [...arr].sort((a, b) => a - b);

	return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

console.log(median([5, 6, 50, 1, -5]));
console.log(median([1, 2, 3, 4, 5]));

// Point : solution 2 ( using reducer  )
const median1 = (arr) => {
	const sortedArr = [...arr].sort((a, b) => a - b);
	const mid = Math.floor(sortedArr.length / 2);

	return sortedArr.reduce((acc, val, id) => {
		if (sortedArr.length % 2 !== 0) {
			return id === mid ? val : acc;
		} else {
			if (id === mid - 1) {
				return (acc + val) / 2;
			} else if (id === mid) {
				return (acc + val) / 2;
			} else {
				return acc;
			}
		}
	}, 0);
};

console.log(median1([5, 6, 50, 1, -5]));
console.log(median1([1, 2, 3, 4, 5]));
