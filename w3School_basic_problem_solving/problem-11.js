'use strict';
console.log('working ...');

/*

  task 11 : Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

*/

// point :  solution

function sumTriple(x, y) {
	if (x === y) {
		return 3 * (x + y);
	} else {
		return x + y;
	}
}

console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));
