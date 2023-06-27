'use strict';
console.log('working...');

// task : Calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.

// point : solution 1; (while loop)

function halvingSum(n) {
	let sum = 0;
	while (n > 0) {
		sum += n;
		n = Math.trunc(n / 2);
	}
	return sum;
}

console.log(halvingSum(8)); /// 15
console.log(halvingSum(9)); /// 16

// point : solution 2; (for loop)

function halvingSum2(n) {
	let sum = 0;

	for (; n >= 1; n = Math.floor(n / 2)) {
		sum += n;
	}
	return sum;
}

console.log(halvingSum2(8)); /// 15
console.log(halvingSum2(9)); /// 16

// task : Check whether a given string represents a correct sentence or not.

// point : solution 1 ( if statement )

function isSentenceCorrect(str) {
	let firstCharacter = str[0];
	let lastCharacter = str[str.length - 1];

	return /[A-Z]/.test(firstCharacter) && lastCharacter === '.';
}

console.log(isSentenceCorrect('This is an example of *correct* sentence.')); /// true
console.log(isSentenceCorrect('this is an example of *correct* sentence.')); /// false
console.log(isSentenceCorrect('This is an example of *correct* sentence')); /// false

console.log('------------------');

// point : solution 2 ( conditional operator )

function isSentenceCorrect2(str) {
	return /[A-Z]/.test(str[0]) && str[str.length - 1] === '.';
}

console.log(isSentenceCorrect2('This is an example of *correct* sentence.')); /// true
console.log(isSentenceCorrect2('this is an example of *correct* sentence.')); /// false
console.log(isSentenceCorrect2('This is an example of *correct* sentence')); /// false

console.log('------------------ another problem ------------------');

// task : Given a string, find the number of different characters in it.

// point : solution 1 ( for loop )

function differentSymbolsNaive(str) {
	let result = [];
	for (let i = 0; i < str.length; i++) {
		if (!result.includes(str[i])) {
			result.push(str[i]);
		}
	}
	return result.length;
}

console.log(differentSymbolsNaive('cabca')); /// 3
console.log(differentSymbolsNaive('aba')); /// 2
console.log(differentSymbolsNaive('c')); /// 1

// task : Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right)

// point : exercise Example:
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false

// point : solution 1 ( nested for loop with 2d  array condition )

function isDiagonalMatrix(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			if (i !== j && matrix[i][j] !== 0) {
				return false;
			}
		}
	}
	return true;
}

console.log(
	isDiagonalMatrix([
		[1, 0, 0],
		[0, 2, 0],
		[0, 0, 3],
	]),
); /// true

console.log(
	isDiagonalMatrix([
		[1, 0, 0],
		[0, 2, 3],
		[0, 0, 3],
	]),
); /// false

// error : solution 2 ( nested for loop with 1d array condition )  not gonna work until we use 2d array and nested array

function isDiagonalMatrix2(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][i] === 0) {
			return false;
		}
	}
	return true;
}

console.log(
	isDiagonalMatrix2([
		[1, 0, 0],
		[0, 2, 0],
		[0, 0, 3],
	]),
); /// true
console.log(
	isDiagonalMatrix2([
		[1, 0, 0],
		[0, 2, 3],
		[0, 0, 3],
	]),
); /// false
