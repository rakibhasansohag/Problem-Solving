'use strict';
console.log('working...');

// tasK : Remove all characters from a given string that appear more than once.

// POINT : SOLUTION 1 ( for loop and indexOf() with split() )
console.time(' removeDuplicateChar');
function removeDuplicateChar(str) {
	let newArr = str.split('');

	let result = [];

	for (let i = 0; i < newArr.length; i++) {
		if (str.indexOf(newArr[i]) === str.lastIndexOf(newArr[i])) {
			result.push(newArr[i]);
		}
	}
	return result.join('');
}

console.log(removeDuplicateChar('Learn more javascript dude'));
console.log(removeDuplicateChar('abcdabc'));
console.log(removeDuplicateChar('developer'));
console.timeEnd(' removeDuplicateChar');

// POINT : SOLUTION 2 ( reduce() and indexOf() with split() )

console.time(' removeDuplicateChar2');

function removeDuplicateChar2(str) {
	let result = str.split('').reduce((acc, curr) => {
		if (str.indexOf(curr) === str.lastIndexOf(curr)) {
			acc.push(curr);
		}
		return acc;
	}, []);

	return result.join('');
}

console.log(removeDuplicateChar2('Learn more javascript dude'));
console.log(removeDuplicateChar2('abcdabc'));
console.log(removeDuplicateChar2('developer'));

console.timeEnd(' removeDuplicateChar2');

// POINT : SOLUTION 3 ( filter() and indexOf() with split() )

console.time(' removeDuplicateChar3');

function removeDuplicateChar3(str) {
	let result = str.split('').filter((item, index) => {
		return str.indexOf(item) === index;
	});
	return result.join('');
}

console.log(removeDuplicateChar3('Learn more javascript dude'));
console.log(removeDuplicateChar3('abcdabc'));
console.log(removeDuplicateChar3('developer'));

console.timeEnd(' removeDuplicateChar3');

console.log('----------------------- another problem -----------------------');

// task : Replace the first digit in a string (should contains at least digit) with $ character.

// POINT : SOLUTION 1 ( for loop and isNaN() with split() )

console.time(' replaceFirstDigit');

function replaceFirstDigit(str) {
	let newArr = str.split('');

	for (let i = 0; i < newArr.length; i++) {
		if (!isNaN(newArr[i])) {
			newArr[i] = '$';
			break;
		}
	}
	return newArr.join('');
}

console.log(replaceFirstDigit('abc1dabc'));
console.log(replaceFirstDigit('p3ython'));
console.log(replaceFirstDigit('ab1cabc'));
console.timeEnd(' replaceFirstDigit');

// POINT : SOLUTION 2 ( using replace() )

console.time(' replaceFirstDigit2');

function replaceFirstDigit2(str) {
	return str.replace(/[0-9]/, '$');
}

console.log(replaceFirstDigit2('abc1dabc'));
console.log(replaceFirstDigit2('p3ython'));
console.log(replaceFirstDigit2('ab1cabc'));
console.timeEnd(' replaceFirstDigit2');

console.log('----------------------- another problem -----------------------');

// task : Test whether a given integer is greater than 15 return the given number, otherwise return 15

// POINT : SOLUTION 1 ( if else )

console.time(' testNumber');

function testNumber(num) {
	if (num > 15) {
		return num;
	} else {
		return 15;
	}
}

console.log(testNumber(10));
console.log(testNumber(20));
console.log(testNumber(15));
console.timeEnd(' testNumber');

// POINT : SOLUTION 2 ( ternary operator )

console.time(' testNumber2');

function testNumber2(num) {
	return num > 15 ? num : 15;
}

console.log(testNumber2(10));
console.log(testNumber2(20));
console.log(testNumber2(15));
console.timeEnd(' testNumber2');

// point : SOLUTION 3 ( while loop )

console.time(' testNumber3');

function testNumber3(num) {
	while (num <= 15) {
		num++;
	}
	return num;
}

console.log(testNumber3(10));
console.log(testNumber3(20));
console.log(testNumber3(15));

console.timeEnd(' testNumber3');
