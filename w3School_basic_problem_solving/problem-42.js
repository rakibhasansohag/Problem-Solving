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
