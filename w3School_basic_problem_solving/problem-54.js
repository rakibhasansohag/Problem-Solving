'use strict';
console.log('working...');

// task : Check whether a given matrix is lower triangular or not.
// point: Note( A matrix is called lower triangular if all the entries above the main diagonal are zero. )

// point : solution 1 ( using nested for loop )
console.time('isLowerTriangularMatrix');
function isLowerTriangularMatrix(matrix) {
	for (let i = 0; i < matrix; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (j < i && matrix[i][j] !== 0) return false;
		}
	}

	return true;
}

console.log(
	isLowerTriangularMatrix([
		[1, 0, 0],
		[2, 0, 0],
		[0, 3, 3],
	]),
);
console.log(
	isLowerTriangularMatrix([
		[1, 0, 1],
		[2, 0, 0],
		[0, 3, 3],
	]),
);

console.timeEnd('isLowerTriangularMatrix');

// task : Check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.

// point : solution 1 ( using for loop )

console.time('isIncreasingOrDecreasing');
function isIncreasingOrDecreasing(arr) {
	if (arr.length === 1) {
		return true;
	}

	let isIncreasing = arr[1] - arr[0];

	for (let i = 0; i < arr.length - 1; i++) {
		if (isIncreasing * (arr[i + 1] - arr[i]) <= 0) {
			return false;
		}
	}
	return true;
}

console.log(isIncreasingOrDecreasing([1, 2, 3]));
console.log(isIncreasingOrDecreasing([1, 2, 2]));
console.log(isIncreasingOrDecreasing([-3, -2, -1]));

console.timeEnd('isIncreasingOrDecreasing');

// point : solution 2 ( using recursion )

console.time('isIncreasingOrDecreasing');

function isIncreasingOrDecreasing(arr) {
	if (arr.length === 1) return true;

	let isIncreasing = arr[1] - arr[0];

	if (isIncreasing * (arr[2] - arr[1]) <= 0) return false;

	return isIncreasingOrDecreasing(arr.slice(1));
}

console.log(isIncreasingOrDecreasing([1, 2, 3]));
console.log(isIncreasingOrDecreasing([1, 2, 2]));
console.log(isIncreasingOrDecreasing([-3, -2, -1]));

console.timeEnd('isIncreasingOrDecreasing');

// task :  Find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer.

// point : solution 1 ( using for loop )

console.time('isPermutation');

function isPermutation(arr, n) {
	for (let i = 0; i < n; i++) {
		if (arr.indexOf(i + 1) < 0) {
			return false;
		}
	}
	return true;
}

console.log(isPermutation([1, 2, 3, 4, 5], 5));
console.log(isPermutation([1, 2, 3, 5], 5));

console.timeEnd('isPermutation');

// point : solution 2 ( using recursion )

console.time('isPermutation with recursion');

function isPermutation2(arr, n) {
	if (n === 0) return true;

	if (arr.indexOf(n) < 0) return false;

	return isPermutation2(arr, n - 1);
}

console.log(isPermutation2([1, 2, 3, 4, 5], 5));
console.log(isPermutation2([1, 2, 3, 5], 5));

console.timeEnd('isPermutation with recursion');

// point : ( without using built-in function )

console.time('isPermutation without built-in function');

function isPermutation3(arr, n) {
	for (let i = 0; i < n; i++) {
		let j = 0;
		while (j < n) {
			if (arr[j] === i + 1) break;
			j++;
		}
		if (j === n) return false;
	}
	return true;
}

console.log(isPermutation3([1, 2, 3, 4, 5], 5));
console.log(isPermutation3([1, 2, 3, 5], 5));

console.timeEnd('isPermutation without built-in function');

console.log('another problems...');
// task : Create the value of NOR of two given booleans.

// point : solution 1 ( using for loop )

console.time('nor');

function nor(a, booleans) {
	if (!a && !booleans) return true;
	return false;
}

console.log(nor(true, false));
console.log(nor(false, false));
console.log(nor(true, true));

console.timeEnd('nor');

// point : solution 2 ( using recursion )

console.time('nor with recursion');

function nor2(a, booleans) {
	return !a && !booleans;
}

console.log(nor2(true, false));
console.log(nor2(false, false));
console.log(nor2(true, true));

console.timeEnd('nor with recursion');
