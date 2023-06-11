'use strict';
console.log('working....');

// task : Check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40

// point :: solution 1

function checkThreeNumbers(x, y, z) {
	if (x === y && y === z) {
		return 30;
	}

	if (x === y || y === z || z === x) {
		return 40;
	}

	return 20;
}

console.log(checkThreeNumbers(10, 20, 30));
console.log(checkThreeNumbers(8, 8, 8));

// point :: solution 2

function checkThreeNumbers2(x, y, z) {
	if (x === y && y === z) {
		return 30;
	} else if (x === y || y === z || z === x) {
		return 40;
	}

	return 20;
}

console.log(checkThreeNumbers2(10, 20, 30));
console.log(checkThreeNumbers2(8, 8, 8));

// task : Check whether three given numbers are increasing in strict mode or in soft mode

function numberOrder(x, y, z) {
	if (y > x && z > y) {
		return 'strict mode';
	} else if (z > y) {
		return 'soft mode';
	} else {
		return 'not increasing';
	}
}
console.log('--------------number order--------------');
console.log(numberOrder(10, 20, 30));
console.log(numberOrder(24, 22, 31));
console.log(numberOrder(50, 21, 15));

// task :Check from three given numbers that two or all of them have the same rightmost digit

function sameRightDigit(x, y, z) {
	if (x % 10 === y % 10 || x % 10 === z % 10 || y % 10 === z % 10) {
		return true;
	} else {
		return false;
	}
}
console.log('--------------same right digit--------------');
console.log(sameRightDigit(22, 32, 42));
console.log(sameRightDigit(102, 302, 2));
console.log(sameRightDigit(20, 22, 45));

// task : Check from three given integers that whether a number is greater than or equal to 20 and less than one of the others

// point solution 1

// function lessBy20(x, y, z) {
// 	if (x >= 20 && (x < y || x < z)) {
// 		return true;
// 	} else if (y >= 20 && (y < x || y < z)) {
// 		return true;
// 	} else if (z >= 20 && (z < x || z < y)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function lessBy20OneLine(x, y, z) {
// 	return (
// 		(x >= 20 && (x < y || x < z)) ||
// 		(y >= 20 && (y < x || y < z)) ||
// 		(z >= 20 && (z < x || z < y))
// 	);
// }

console.log('--------------less by 20--------------');

function lessBy20(x, y, z) {
	if (x >= 20 && (x < y || x < z)) {
		return true;
	} else if (y >= 20 && (y < x || y < z)) {
		return true;
	} else if (z >= 20 && (z < x || z < y)) {
		return true;
	} else {
		return false;
	}
}

console.log(lessBy20(23, 45, 10));
console.log(lessBy20(23, 23, 10));
console.log(lessBy20(21, 66, 10));

// point solution 2

function lessBy20OneLine(x, y, z) {
	return (
		(x >= 20 && (x < y || x < z)) ||
		(y >= 20 && (y < x || y < z)) ||
		(z >= 20 && (z > x || z > y))
	);
}

console.log(lessBy20OneLine(23, 45, 10));
console.log(lessBy20OneLine(23, 23, 10));
console.log(lessBy20OneLine(21, 66, 10));

// task : Check two given integer values and return true if one of the number is 15 or if their sum or difference is 15

function checkTwoNumbers(x, y) {
	if (x === 15 || y === 15 || x + y === 15 || x - y === 15) {
		return true;
	} else {
		return false;
	}
}

console.log('--------------check two numbers--------------');
console.log(checkTwoNumbers(15, 9));
console.log(checkTwoNumbers(25, 14));
console.log(checkTwoNumbers(7, 8));
console.log(checkTwoNumbers(25, 10));

function checkTwoNumbers2(x, y) {
	if (x === 15 || y === 15 || x + y === 15 || x - y === 15) {
		return true;
	}
}
