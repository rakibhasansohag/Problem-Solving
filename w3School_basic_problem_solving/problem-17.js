'use strict';
console.log('working...');

// task 17 : Remove a character at the specified position of a given string and return the new string

// point : solution 1

function removeCharacter(str, position) {
	let firstPart = str.substring(0, position);
	let lastPart = str.substring(position + 1, str.length);
	return firstPart + lastPart;
}

console.log(removeCharacter('Python', 0));
console.log(removeCharacter('Python', 3));

// point : solution 2 (using split and splice)

function removeCharacter2(str, position) {
	let arr = str.split('');
	arr.splice(position, 1);
	return arr.join('');
}
console.log(`....................................................`);
console.log(removeCharacter2('Python', 0));
console.log(removeCharacter2('Python', 3));
