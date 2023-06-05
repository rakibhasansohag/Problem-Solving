'use strict';
console.log('working...');

// task PROBLEM number 228 : Summary ranges //

/*  statement :You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

  
task 1.1 : Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"


task 1.2 : Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"



*/

// / -------------solution 1 -----------------------//

var summaryRanges = function (nums) {
	let indexNumber = 0;
	let result = [];
	let start;
	let flag = true;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] - 1 != nums[i - 1] && nums[i] + 1 != nums[i + 1]) {
			result.push(`${nums[i]}`);
		} else if (nums[i] + 1 === nums[i + 1]) {
			indexNumber = i + 1;

			if (flag) {
				start = i;
				flag = false;
			}
		} else {
			if (!indexNumber) {
				result.push(`${nums[i]}`);
			} else {
				result.push(`${nums[start]}->${nums[indexNumber]}`);
				flag = true;
			}
		}
	}

	return result;
};

const nums1 = [0, 1, 2, 4, 5, 7];
const nums2 = [0, 2, 3, 4, 6, 8, 9];
const nums3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const result = summaryRanges(nums1);
const result2 = summaryRanges(nums2);
const result3 = summaryRanges(nums3);
console.log(result);
console.log(result2);
console.log(result3); // [0->8]

// / -------------solution 2 ( not good ) -----------------------//

/*

var summaryRanges = function (nums) {
	let arr = [];
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + 1 === nums[i + 1]) {
			arr.push(nums[i]);
		} else if (nums[i] + 1 !== nums[i + 1] && nums[i] === nums[i - 1] + 1) {
			arr.push(nums[i]);
			result.push(arr);
			arr = [];
		} else {
			result.push;
		}
	}

	for (let j = 0; j < result.length; j++) {
		if (result[j].length > 1) {
			result[j] = `${result[j][0]}->${result[j][result[j].length - 1]}`;
		} else {
			result[j] = `${result[j][0]}`;
		}
	}

	return result;
};

const nums1 = [0, 1, 2, 4, 5, 7];
const nums2 = [0, 2, 3, 4, 6, 8, 9];

const result = summaryRanges(nums1);
const result2 = summaryRanges(nums2);
console.log(result);
console.log(result2);

*/
