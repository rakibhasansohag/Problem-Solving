'use strict';
console.log('working...');

// task : Problem 26 : Find a value which is nearest to 100 from two different given integer values

// point : solution 1

function nearestTo100(x, y) {
	if (x != y) {
		let x1 = Math.abs(x - 100);
		let y1 = Math.abs(y - 100);

		if (x1 < y1) {
			return x;
		} else if (y1 < x1) {
			return y;
		} else {
			return 0;
		}
	} else {
		return false;
	}
}
console.log(nearestTo100(90, 89));
console.log(nearestTo100(-90, -89));
console.log(nearestTo100(90, 90));

// point : solution 2

function nearestTo1002(x, y) {
	if (x != y) {
		let x1 = Math.abs(x - 100);
		let y1 = Math.abs(y - 100);

		if (x1 < y1) {
			return x;
		} else {
			return y;
		}
	} else {
		return false;
	}
}

console.log(nearestTo1002(90, 89));
console.log(nearestTo1002(-90, -89));
console.log(nearestTo1002(90, 90));

//  task : 26.1 : Check whether two numbers are in range 40..60 or in the range 70..100 inclusive

// point : solution 1

function checkRange(x, y) {
	if (
		(x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
		(x >= 70 && x <= 100 && y >= 70 && y <= 100)
	) {
		return true;
	} else {
		return false;
	}
}
console.log('task 26.1 :');
console.log(checkRange(44, 56));
console.log(checkRange(70, 95));
console.log(checkRange(50, 89));
