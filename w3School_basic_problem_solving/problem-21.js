'use strict';
console.log('working....');

// task 21 : Create a new string from a given string taking the last 3 characters and added at both the front and back.

// point : solution 1
console.time('addLastThreeCharacter');
function addLastThreeCharacter(str) {
	if (str.length <= 3) {
		return str;
	} else {
		let lastThreeCharacter = str.substring(str.length - 3);
		return lastThreeCharacter + str + lastThreeCharacter;
	}
}
console.timeEnd('addLastThreeCharacter');
console.log(addLastThreeCharacter('Python'));
console.log(addLastThreeCharacter('JavaScript'));
console.log(addLastThreeCharacter('abc'));
console.log(addLastThreeCharacter('ab'));
console.log(addLastThreeCharacter('a'));

// point : solution 2 (using split and join) // fastest

console.time('addLastThreeCharacter2');
function addLastThreeCharacter2(str) {
	if (str.length <= 3) {
		return str;
	} else {
		let lastThreeCharacter = str.split('');
		lastThreeCharacter = lastThreeCharacter.slice(-3);
		return lastThreeCharacter.join('') + str + lastThreeCharacter.join('');
	}
}
console.timeEnd('addLastThreeCharacter2');
console.log(`....................................................`);
console.log(addLastThreeCharacter2('Python'));
console.log(addLastThreeCharacter2('JavaScript'));
console.log(addLastThreeCharacter2('abc'));
console.log(addLastThreeCharacter2('ab'));
console.log(addLastThreeCharacter2('a'));
