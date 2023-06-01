'use strict';
console.log('working...');

/*

task : Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

*/

// point : solution-1

let num1, num2;

function multiply() {
	num1 = document.getElementById('num1').value;
	num2 = document.getElementById('num2').value;
	document.getElementById('demo').innerHTML = num1 * num2;
}

function divideBy() {
	num1 = document.getElementById('num1').value;
	num2 = document.getElementById('num2').value;
	document.getElementById('demo').innerHTML = num1 / num2;
}
