'use strict';
console.log('working....');

// task  20 : Check whether a given positive number is a multiple of 3 or a multiple of 7

// point : solution 1

function checkNumber(num) {
	if (num) {
		return num % 3 === 0 || num % 7 === 0 ? true : false;
	}
}

console.log(checkNumber(12));
console.log(checkNumber(14));
console.log(checkNumber(10));
console.log(checkNumber(11));

// point : solution 2 (using if else)

function checkNumber2(num) {
	if (num) {
		if (num % 3 === 0 || num % 7 === 0) {
			return true;
		} else {
			return false;
		}
	}
}
console.log(`....................................................`);

console.log(checkNumber2(12));
console.log(checkNumber2(14));
console.log(checkNumber2(10));
console.log(checkNumber2(11));

// point : solution 3 (using if else)

function checkNumber3(num) {
	if (num) {
		if (num % 3 === 0) {
			return true;
		} else if (num % 7 === 0) {
			return true;
		} else {
			{
				return false;
			}
		}
	}
}

console.log(`....................................................`);
console.log(checkNumber3(12));
console.log(checkNumber3(14));
console.log(checkNumber3(10));
console.log(checkNumber3(11));
