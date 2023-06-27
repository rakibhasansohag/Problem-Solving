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
