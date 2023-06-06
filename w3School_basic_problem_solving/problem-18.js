'use strict';
console.log('working....');

// task 18 : Create a new string from a given string changing the position of first and last characters

// point : solution 1

function changePosition(str) {
	if (str.length <= 1) {
		return str;
	} else {
		let midCharacter = str.substring(1, str.length - 1);
		return str.charAt(str.length - 1) + midCharacter + str.charAt(0);
	}
}

console.log(changePosition('Python'));
console.log(changePosition('JavaScript'));
console.log(changePosition('a'));
console.log(changePosition('ab'));

// point : solution 2 (using split and join)

function changePosition2(str) {
	if (str.length <= 1) {
		return str;
	}
	let arr = str.split('');
	let firstChar = arr.shift();
	let lastChar = arr.pop();
	return lastChar + arr.join('') + firstChar;
}
console.log(`....................................................`);
console.log(changePosition2('Python'));
console.log(changePosition2('JavaScript'));
console.log(changePosition2('a'));
console.log(changePosition2('ab'));
