'use strict';
console.log('working...');

// TASK : Find the number which appears most in a given array of integers

// point solution 1 : ( w3school way )

function findMostFrequentNumber(arr) {
	let map = [],
		max = 0;

	for (let i = 0; i < 10; i++) {
		map.push(0);
	}
	for (let i = 0; i < arr.length; i++) {
		map[arr[i] - 1]++;

		if (map[arr[i] - 1] > map[max]) {
			max = arr[i] - 1;
		}
	}
	return max + 1;
}

console.log(findMostFrequentNumber([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 1, 1]));

// point solution 2 : (  my way )

function findMostFrequentNumber2(arr) {
	let map = {};
	let max = arr[0]; // we can use null instead of arr[0]

	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]]) {
			map[arr[i]]++;
		} else {
			map[arr[i]] = 1;
		}
	}

	for (let key in map) {
		if (max === null || map[key] > map[max]) {
			max = key;
		}
	}

	return parseInt(max);
}

console.log(
	findMostFrequentNumber2([1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9]),
);

console.log('------------- another problem -----------------');

// task : Replace all the numbers with a specified number of a given array of integers.

// point: solution 1 ( for loop )
function replaceAllNumbers(arr, oldValue, newValue) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === oldValue) {
			arr[i] = newValue;
		}
	}
	return arr;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
console.log(replaceAllNumbers(num, 2, 5));

// point: solution 2 ( map )

function replaceAllNumbers2(arr, oldValue, newValue) {
	return arr.map((item) => (item === oldValue ? newValue : item));
}

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num2);
console.log(replaceAllNumbers2(num2, 2, 5));

// point: solution 3 ( filter )

function replaceAllNumbers3(arr, oldValue, newValue) {
	return arr.filter((item) => (item === oldValue ? newValue : item));
}

let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num3);
console.log(replaceAllNumbers3(num3, 2, 5));

console.log('------------- another problem -----------------');

// task : Compute the sum of absolute differences of consecutive numbers of a given array of integers

// point: solution 1 ( for loop )

function sumOfAbsoluteDifferences(arr) {
	let sum = 0;

	for (let i = 1; i < arr.length; i++) {
		sum += Math.abs(arr[i] - arr[i - 1]);
	}
	return sum;
}

console.log(sumOfAbsoluteDifferences([1, 2, 3, 2, -5]));

// point: solution 2 ( reduce )

function sumOfAbsoluteDifferences2(arr) {
	return arr.reduce((acc, item, index) => {
		if (index === 0) {
			return acc;
		} else {
			return acc + Math.abs(item - arr[index - 1]);
		}
	}, 0);
}
console.log(sumOfAbsoluteDifferences2([1, 2, 3, 2, -5]));
