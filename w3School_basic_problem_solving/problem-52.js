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

console.log('------------------ another problem ------------------');

// task : Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

// point : solution 1 ( using  for loop with  2d array )

console.time('replaceHash1');
function replaceHash(str) {
	let result = [];
	for (let i = 0; i < 10; i++) {
		let newStr = str.replace('#', i);
		if (Number(newStr) % 3 === 0) {
			result.push(newStr);
		}
	}
	return result;
}
console.log(replaceHash('2#0')); /// ["210", "240", "270"]
console.log(replaceHash('2#3')); /// ["213", "243", "273"]
console.log(replaceHash('4#2')); ///[ '402', '432', '462', '492' ]
console.timeEnd('replaceHash1');

// point : solution ( using for loop and charAt() method (w3School way) )

console.time('replaceHash2');

function replaceHash2(str) {
	let digitSum = 0;
	let left = '0'.charCodeAt();
	let right = '9'.charCodeAt();
	let result = [];
	let hashSplit = str.split('');
	let hashPosition = -1;

	for (let i = 0; i < hashSplit.length; i++) {
		if (
			left <= hashSplit[i].charCodeAt() &&
			hashSplit[i].charCodeAt() <= right
		) {
			digitSum += hashSplit[i].charCodeAt() - left;
		} else {
			hashPosition = i;
		}
	}

	for (let i = 0; i < 10; i++) {
		if ((digitSum + i) % 3 === 0) {
			hashSplit[hashPosition] = String.fromCharCode(left + i);
			result.push(hashSplit.join(''));
		}
	}

	return result;
}

console.log(replaceHash2('2#0')); /// ["210", "240", "270"]
console.log(replaceHash2('2#3')); /// ["213", "243", "273"]
console.log(replaceHash2('4#2')); /// [ '402', '432', '462', '492' ]
console.timeEnd('replaceHash2');
