'use strict';
console.log('working...');
/*
1. Write a javaScript program that takes 3 integers of a triangle and check whether the triangle is valid or not. using if else.
Example_
Input
Input first side: 7
Input second side: 10
Input third side: 5
Output
Valid Triangle
*/

// point 1.1 : make a function that takes 3 integers of a triangle and

// point 1.2 : use that integers as for using the function

// point 1.3 : using the triangle  Inequality Theorem to calculate the function

function validTriangle(a, b, c) {
	if (a + b > c && a + c > b && c + b > a) {
		return 'valid triangle';
	} else {
		return 'invalid triangle';
	}
}

console.log(validTriangle(7, 10, 5)); /// valid triangle
console.log(validTriangle(11, 11, 23)); /// invalid triangle
