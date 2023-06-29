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
