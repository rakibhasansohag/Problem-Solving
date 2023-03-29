'use strict';
console.log('working...');

/*

3. Write a JavaScript program to get the greatest common divisor (GCD) of two positive integers.

Two positive integers: 81 and 153
GCD= 9

*/

// point 1 : what is the greatest common divisor(GCD) solution : the greatest common factor number that divides them,

// point 2 : how does gcd calculated : solution :

ans = a / b;

const gcdFunction = (a, b) => {
	if (b === 0) {
		return a;
	}

	return gcdFunction(b, a % b);
};

console.log(gcdFunction(81, 153)); /// 9
console.log(gcdFunction(100, 191)); /// 1
