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

console.log(
	'------------------------ another problem ------------------------',
);

// task : Check whether a given number is in a given range.

function isInRange(range1, range2, range3) {
	return range2 >= range1 && range2 <= range3;
}

console.log(isInRange(1, 2, 3));
console.log(isInRange(1, 2, -3));
console.log(isInRange(1.1, 1.2, 1.3));

console.log(
	'------------------------ another problem ------------------------',
);

// task : Check whether a given integer has an increasing digits sequence.

function isIncreasingDigitsSequence(num) {
	let str = num.toString();

	for (let i = 0; i < str.length; i++) {
		if (parseInt(str[i]) >= parseInt(str[i + 1])) {
			return false;
		}
	}
	return true;
}

console.log(isIncreasingDigitsSequence(123));
console.log(isIncreasingDigitsSequence(1223));
console.log(isIncreasingDigitsSequence(54677));

console.log(
	'------------------------ another problem ------------------------',
);

// task : Check whether a point lies strictly inside a given circle

// point: solution 1 ( Math.sqrt )

function isCirce(x, y, x1, y1, r) {
	let distance = Math.sqrt((x - x1) ** 2 + (y - y1) ** 2);

	return distance < r;
}

console.log(isCirce(0, 0, 2, 4, 6));
console.log(isCirce(0, 0, 2, 4, 4));

// point : solution 2 (  condition  )

function isCirce2(x, y, x1, y1, r) {
	let distance = (x - x1) ** (x - x1) + (y - y1) * (y - y1);

	r *= r; // r = r * r

	if (distance < r) {
		return true;
	} else {
		return false;
	}
}

console.log(isCirce2(0, 0, 2, 4, 6));
console.log(isCirce2(0, 0, 2, 4, 4));
