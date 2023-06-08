'use strict';
console.log('working...');

// task  --- Problem 35 : Search Insert Position :  ---

/*


  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.


*/

let arr = [1, 3, 5, 6]; // task : target value = 5
let arr2 = [1, 3, 5, 6]; // task : target value = 2
let arr3 = [1, 3, 5, 6]; // task : target value = 7

var searchInsert = function (nums, target) {
	let low = 0;
	let high = nums.length - 1;

	while (low <= high) {
		let middle = Math.floor((low + high) / 2);

		if (nums[middle] === target) {
			return middle;
		} else if (nums[middle] < target) {
			low = middle + 1;
		} else if (nums[middle] > target) {
			high = middle - 1;
		}
	}
	return low;
};

console.log(searchInsert(arr, 5));
console.log(searchInsert(arr2, 2));
console.log(searchInsert(arr3, 7));
