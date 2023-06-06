'use strict';
console.log('working....');

//  task 19 : Create a new string from a given string with the first character of the given string added at the front and back

// point : solution 1

function addFirstCharacter(str) {
	let firstCharacter = str.substring(0, 1);
	return firstCharacter + str + firstCharacter;
}
console.log(addFirstCharacter('Python'));
console.log(addFirstCharacter('JavaScript'));
console.log(addFirstCharacter('a'));

// point : solution 2 (using split and join)

function addFirstCharacter2(str) {
	let arr = str.split('');
	let firstCharacter = arr.shift();
	return firstCharacter + arr.join('') + firstCharacter;
}

console.log(`....................................................`);
console.log(addFirstCharacter2('Python'));
console.log(addFirstCharacter2('JavaScript'));
console.log(addFirstCharacter2('a'));

// point : solution 3 (using concat and charAt)

function addFirstCharacter3(str) {
	let firstCharacter = str.charAt(0);
	return firstCharacter.concat(str, firstCharacter);
}

console.log(`....................................................`);
console.log(addFirstCharacter3('Python'));
console.log(addFirstCharacter3('JavaScript'));
console.log(addFirstCharacter3('a'));
