'use strict';
console.log('working...');

// task 1 : Write a javaScript program to that takes an array which contains all unique integer elements and a peak element. Find the index of the peak element from the array . if the peak element does not exist  return -1 .
// point : Note : You have to use binary search algorithm to solve this problem.

// example  :

// / input : array = [5,6,7,9,11,22,36,98]
// /         peak  element =  11
// /  output : 4 (index of 11)

// point : solution 1 : time complexity O(n) , space complexity O(1)

console.time('solution 1');

function peakElement(arr, peak) {
	let index = -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === peak) {
			index = i;
			break;
		}
	}

	return index;
}

console.log(peakElement([5, 6, 7, 9, 11, 22, 36, 98], 11)); /// 4
console.log(peakElement([5, 6, 7, 9, 11, 22, 36, 98], 980)); /// -1
console.timeEnd('solution 1');

// point : solution 2 : using binary search algorithm : while loop

console.time('solution 2');

function peakElement2(arr, peak) {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.round((start + end) / 2);

	while (start <= end) {
		if (arr[mid] < peak) {
			start = mid + 1;
		} else if (arr[mid] > peak) {
			end = mid - 1;
		} else {
			return mid;
		}

		mid = Math.round((start + end) / 2);
	}

	return arr[mid] === peak ? mid : -1;
}

console.log(peakElement2([5, 6, 7, 9, 11, 22, 36, 98], 11)); /// 4
console.log(peakElement2([5, 6, 7, 9, 11, 22, 36, 98], 980)); /// -1

console.timeEnd('solution 2');

// point  : solution 3 : using binary search algorithm : for loop

console.time('solution 3');

function peakElement3(arr, peak) {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.round((start + end) / 2);

	for (let i = 0; i < arr.length; i++) {
		if (arr[mid] < peak) {
			start = mid + 1;
		} else if (arr[mid] > peak) {
			end = mid - 1;
		} else {
			return mid;
		}
	}

	return arr[mid] === peak ? mid : -1;
}

console.log(peakElement3([5, 6, 7, 9, 11, 22, 36, 98], 11)); /// 4
console.log(peakElement3([5, 6, 7, 9, 11, 22, 36, 98], 980)); /// -1

console.timeEnd('solution 3');
