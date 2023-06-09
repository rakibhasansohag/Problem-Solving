'use strict';
console.log('working...');

// task :  Check a given string contains 2 to 4 numbers of a specified character

// point :: solution 1

function checkStr(str, character) {
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) == character && i >= 1 && i <= 3) {
			count = 1;
			break;
		}
	}
	if (count == 1) {
		return true;
	} else {
		return false;
	}
}

console.log(checkStr('JavaScript', 'a')); // true
console.log(checkStr('Python', 'y')); // true
console.log(checkStr('Console', 'o')); // true
console.log(checkStr('Console', 'e')); // false

// point :: solution 2
console.log('------------------');
function checkStr2(str, character) {
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) == character && i >= 1 && i <= 3) {
			count = 1;
			break;
		}
	}

	if (count == 1) {
		return true;
	} else {
		return false;
	}
}

console.log(checkStr2('JavaScript', 'a'));
console.log(checkStr2('Python', 'y'));
console.log(checkStr2('Console', 'o'));
console.log(checkStr2('Console', 'e'));
console.log(checkStr2('Cons3le', '3'));
