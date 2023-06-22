'use strict';
console.log('working...');

// Task: Find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.

// point: solution 1 : ( nested loop )

function buildPalindrome(str) {
	let flags = true;

	for (let i = str.length; ; i++) {
		flags = true;
		for (let j = 0; j < i - j - 1; j++) {
			if (i - j - 1 < str.length && str[j] != str[i - j - 1]) {
				flags = false;
				break;
			}
		}

		if (flags) {
			for (let k = str.length; k < i; k++) {
				str += str[i - k - 1];
			}

			return str;
		}
	}
}

console.log(buildPalindrome('abcdc'));
console.log(buildPalindrome('122'));

// point: solution 2 : (  )

function buildPalindrome2(str) {
	let flag = true;

	for (let i = str.length; ; i++) {
		flag = true;

		for (let j = 0; j < i - j - 1; i++) {
			if (i - j - 1 < str.length && str[j != str[i - j - 1]]) {
				flag = false;
				break;
			}
		}

		if (flag) {
			for (let k = str.length; k < i; k++) {
				str += str[i - k - 1];
			}
			return str;
		}
	}
}

console.log('-------------- another problem -----------------');

// task : Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.

// point: solution 1 : ( with test method )

function changeCase(str) {
	let x,
		y = 0;

	for (let i = 0; i < str.length; i++) {
		if (/[A-Z]/.test(str[i])) x++;
		else y++;
	}

	if (y > x) return str.toLowerCase();
	else return str.toUpperCase();
}

console.log(changeCase('AbaCaba'));
console.log(changeCase('ABACABA'));

// point: solution 2 : ( with charCodeAt method )

function changeCase2(str) {
	let x = 0,
		y = 0;

	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) x++;
		else y++;
	}

	if (y > x) return str.toLowerCase();
	else return str.toUpperCase();
}

console.log('-------------- another problem -----------------');

// task : Rearrange characters of a given string in such way that it will become equal to another given string.

// point: solution 1 : ( with split and sort method )

function rearrangeCharacters(str1, str2) {
	let firstSet = str1.split('');
	let secondSet = str2.split('');
	let result = true;

	firstSet.sort();
	secondSet.sort();

	for (let i = 0; i < Math.max(firstSet.length, secondSet.length); i++) {
		if (firstSet[i] !== secondSet[i]) {
			result = false;
		}
	}
	return result;
}

console.log(rearrangeCharacters('abc', 'cab'));
console.log(rearrangeCharacters('xyz', 'zyp'));
console.log('-------------- another answer -----------------');

// point: solution 2 : ( with split and sort method )

function rearrangeCharacters2(str1, str2) {
	let firstSet = str1.split('').sort();
	let secondSet = str2.split('').sort();

	for (let i = 0; i < Math.max(firstSet.length, secondSet.length); i++) {
		if (firstSet[i] !== secondSet[i]) return false;
	}
	return true;
}

console.log(rearrangeCharacters2('abc', 'cab'));
console.log(rearrangeCharacters2('xyz', 'zyp'));
