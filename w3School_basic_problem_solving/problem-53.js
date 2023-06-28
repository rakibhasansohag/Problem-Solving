'use strict ';
console.log('working...');

/*

task : Write a JavaScript program to check whether a given matrix is an identity matrix.

Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere.
[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

*/

// point :  solution 1 ( for loop )

function isIdentityMatrix(matrix) {
	// point 1.1: check if matrix is square

	for (let i = 0; i < matrix.length; i++) {
		// point 1.2: check if matrix[i][i] is 1

		for (let j = 0; j < matrix[i].length; j++) {
			if (i === j && matrix[i][j] !== 1) {
				return false;
			}

			// point 1.3: check if matrix[i][j] is 0

			if (i !== j && matrix[i][j] !== 0) {
				return false;
			}
		}
	}

	return true;
}

console.log(
	isIdentityMatrix([
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
	]),
);
console.log(
	isIdentityMatrix([
		[1, 0, 0],
		[0, 1, 0],
		[1, 0, 1],
	]),
);

console.log('------------------------');

// point : solution 2 ( every and map )

function isIdentityMatrix2(matrix) {
	// point 2.1: check if matrix is square

	return matrix.every((row, i) => {
		return row.every((num, j) => {
			return i === j ? num === 1 : num === 0;
		});
	});
}

console.log(
	isIdentityMatrix2([
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
	]),
);
console.log(
	isIdentityMatrix2([
		[1, 0, 0],
		[0, 1, 0],
		[1, 0, 1],
	]),
);

console.log('------------------------');

// point : solution 3 ( for loop from w3School way )

function isIdentityMatrix3(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		let rows = matrix.length;
		let cols = matrix[i].length;

		if (rows !== cols) {
			console.log('not square matrix');
			return false;
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			if ((matrix[i][j] !== 1 && i === j) || (matrix[i][j] && i !== j)) {
				return false;
			}
		}
	}
	return true;
}

console.log(
	isIdentityMatrix3([
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
	]),
);
console.log(
	isIdentityMatrix3([
		[1, 0, 0],
		[0, 1, 0],
		[1, 0, 1],
	]),
);

console.log(
	isIdentityMatrix3([
		[1, 0, 0],
		[0, 1, 0],
	]) === false,
); // not square matrix
