'use strict';
console.log('working ...');

/*

task : Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

*/

// point :  solution 1

// function diff(x) {
// 	if (x >= 19) {
// 		return 3 * (x - 19);
// 	} else {
// 		return 19 - x;
// 	}
// }

// console.log(diff(12));
// console.log(diff(19));
// console.log(diff(22));

// point : solution 2

function diffNumber(x) {
	if (x <= 19) {
		return 19 - x;
	} else {
		return (x - 19) * 3;
	}
}

console.log(diffNumber(12)); // 7
console.log(diffNumber(19)); // 0
console.log(diffNumber(22)); // 9
