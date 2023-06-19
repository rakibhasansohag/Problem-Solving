'use strict';
console.log('working....');

// /task  Find the longest string from a given array of strings

// point solution 1:

function longest_string(str) {
	let max = str[0].length;
	str.map((v) => (max = Math.max(max, v.length)));
	let result = str.filter((v) => v.length === max);
	return result;
}
console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));

// point solution 2:(using reduce)

function longest_string2(str) {
	return str.reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(longest_string2(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));

// point solution 3:(using sort)

function longest_string3(str) {
	return str.sort((a, b) => b.length - a.length)[0];
}

console.log(longest_string3(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));

// point solution 4:(using for loop and if condition)

function longest_string4(str) {
	let max = str[0].length;
	let index = 0;
	for (let i = 1; i < str.length; i++) {
		if (max < str[i].length) {
			max = str[i].length;
			index = i;
		}
	}
	return str[index];
}

console.log(longest_string4(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));

// point solution 5: ( using slice and sort)

function longest_string5(str) {
	return str.sort((a, b) => b.length - a.length).slice(0, 1);
}

console.log(longest_string5(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));

// task : Replace each character of a given string by the next one in the English alphabet

// point solution 1: (using for loop and if condition)

function replaceAlphabet(str) {
	let result = str.split('');

	for (let i = 0; i < result.length; i++) {
		if (result[i] === 'z') {
			result[i] = 'a';
		} else {
			result[i] = String.fromCharCode(result[i].charCodeAt(0) + 1);
		}
	}

	return result.join('');
}

console.log(replaceAlphabet('abcdxyz'));

// point solution 2: (using map and if condition)

function replaceAlphabet2(str) {
	let result = str.split('').map((v) => {
		if (v === 'z') {
			return 'a';
		} else {
			return String.fromCharCode(v.charCodeAt(0) + 1);
		}
	});

	return result.join('');
}
console.log(replaceAlphabet2('abcdxyz'));

console.log('----------------------problem another --------------------');

// task : Compute the sum of two parts and store into an array of size two

// point solution 1: (using for loop and if condition)

function sumOfTwoParts(arr) {
	let result = [0, 0]; // / initialize the result array

	for (let i = 0; i < arr.length; i++) {
		if (i % 2) {
			result[1] += arr[i];
		} else {
			result[0] += arr[i];
		}
	}
	return result;
}

console.log(sumOfTwoParts([1, 3, 6, 2, 5, 10]));

// point solution 2: (using reduce and if condition)

function sumOfTwoParts2(arr) {
	return arr.reduce(
		(a, b, i) => {
			if (i % 2) {
				a[1] += b;
			} else {
				a[0] += b;
			}
			return a;
		},
		[0, 0],
	);
}

console.log(sumOfTwoParts2([1, 3, 6, 2, 5, 10]));

// point solution 3: (using for loop and if condition)

function sumOfTwoParts3(arr) {
	let result = [0, 0];

	for (let i = 0; i < arr.length; i++) {
		if (i % 2) {
			result[1] = result[1] + arr[i];
		} else {
			result[0] = result[0] + arr[i];
		}
	}
	return result;
}

console.log(sumOfTwoParts3([1, 3, 6, 2, 5, 10]));
