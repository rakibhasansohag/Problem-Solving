'use strict';
console.log('working....');

// task : Find the maximum possible sum of some of its k consecutive numbers of a specified array of positive integers.

// point: solution 1 ( for loop )

const maxSum = (arr, k) => {
	let result = 0;
	let sum = 0;

	for (let i = 0; i < k - 1; i++) {
		sum += arr[i];
	}

	for (let i = k - 1; i < arr.length; i++) {
		sum += arr[i];
		if (sum > result) {
			result = sum;
		}

		sum -= arr[i - k + 1];
	}
	return result;
};

console.log(maxSum([1, 2, 3, 14, 5], 2));
console.log(maxSum([2, 3, 5, 1, 6], 3));
console.log(maxSum([9, 3, 5, 1, 7], 2));

// point : solution 2 ( reduce )

const maxSum2 = (arr, k) => {
	let result = arr.slice(0, k).reduce((a, b) => a + b, 0);

	let sum = result;

	for (let i = k; i < arr.length; i++) {
		sum += arr[i] - arr[i - k];
		result = Math.max(result, sum);
	}
	return result;
};

console.log(maxSum2([1, 2, 3, 14, 5], 2));
console.log(maxSum2([2, 3, 5, 1, 6], 3));
console.log(maxSum2([9, 3, 5, 1, 7], 2));

console.log(
	'--------------------------- another problem ---------------------------',
);

// task : Find the maximum difference between any two adjacent elements of a given array of integers.

// point : solution 1 ( for loop )
// point: 1.1 : what is adjacent elements?
// / ans: (side-by-side) elements to each other in shape

const maxDifference = (arr) => {
	let max = 0;
	let temp;
	for (let i = 0; i < arr.length; i++) {
		temp = Math.abs(arr[i] - arr[i + 1]);
		if (temp > max) {
			max = temp;
		}
	}
	return max;
};

console.log(maxDifference([1, 2, 3, 8, 9]));
console.log(maxDifference([1, 2, 3, 18, 9]));
console.log(maxDifference([13, 2, 3, 8, 9]));

// point : solution 2 ( reduce )

const maxDifference2 = (arr) => {
	return arr.reduce((acc, cur, i, arr) => {
		let temp = Math.abs(cur - arr[i + 1]);
		if (temp > acc) {
			acc = temp;
		}
		return acc;
	}, 0);
};

console.log(maxDifference2([1, 2, 3, 8, 9]));
console.log(maxDifference2([1, 2, 3, 18, 9]));
console.log(maxDifference2([13, 2, 3, 8, 9]));

console.log(
	'--------------------------- another problem ---------------------------',
);

// task : Find the maximum difference among all possible pairs of a given array of integers.

function maxDifference3(arr) {
	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j != i && j < arr.length; j++) {
			let temp = Math.abs(arr[i] - arr[j]);
			max = Math.max(max, temp);
		}
	}
	return max;
}

console.log(maxDifference3([1, 2, 3, 8, 9]));
console.log(maxDifference3([1, 2, 3, 18, 9]));
console.log(maxDifference3([13, 2, 3, 8, 9]));

// point : solution 2 ( reduce )

function maxDifference4(arr) {
	if (arr.length < 2) {
		return 0;
	}

	return arr.reduce((acc, cur, index) => {
		for (let i = index + 1; i < arr.length; i++) {
			let temp = Math.abs(cur - arr[i]);
			acc = Math.max(acc, temp);
		}
		return acc;
	}, 0);
}

console.log(maxDifference4([1, 2, 3, 8, 9]));
console.log(maxDifference4([1, 2, 3, 18, 9]));
console.log(maxDifference4([13, 2, 3, 8, 9]));
