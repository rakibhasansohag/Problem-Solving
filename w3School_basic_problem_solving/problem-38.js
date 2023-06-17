'use strict';
console.log('working...');

// task : Compute the sum of three elements of a given array of integers of length 3

// point : solution 1
function sumOfArray(arr) {
	return arr[0] + arr[1] + arr[2];
}
console.log(sumOfArray([1, 2, 3]));
console.log(sumOfArray([5, 11, 2]));

// point: solution 2

function sumOfArray2(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(sumOfArray2([1, 2, 3]));
console.log(sumOfArray2([5, 11, 2]));

// task : Rotate the elements left of a given array of integers of length 3

// point : solution 1

function rotateLeft(arr) {
	let first = arr[0];
	let second = arr[1];
	let third = arr[2];

	arr[0] = third;
	arr[1] = second;
	arr[2] = first;

	return arr;
}

console.log(rotateLeft([3, 4, 5]));
console.log(rotateLeft([0, -1, 2]));
console.log(rotateLeft([7, 6, 5]));

// point : solution 2

function rotateLeft2(arr) {
	return [arr[2], arr[1], arr[0]];
}

console.log(rotateLeft2([3, 4, 5]));
console.log(rotateLeft2([0, -1, 2]));
console.log(rotateLeft2([7, 6, 5]));

// task : Check whether 1 appears in first or last position of a given array of integers

// point : solution 1

function checkOne(arr) {
	return arr[0] === 1 || arr[arr.length - 1] === 1;
}
console.log(checkOne([1, 2, 3]));
console.log(checkOne([3, 2, 1]));
console.log(checkOne([5, 2, 3]));
