'use strict';
console.log('working...');

// task : Divide an integer by another integer as long as the result is an integer and return the result

// point: solution 1 : ( while loop  )

function divideDigit(num1, num2) {
	if (num2 === 1) {
		return num1;
	} else {
		while (num1 % num2 === 0) {
			num1 /= num2;
		}

		return num1;
	}
}
console.log(divideDigit(-12, 2));
console.log(divideDigit(13, 2));
console.log(divideDigit(13, 1));
