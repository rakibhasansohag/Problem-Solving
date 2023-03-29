'use strict';
console.log('working ....');

/*


5. Write a javaScript program that takes two inputs A and B and prints all numbers that are multiples of  A but divisors of B. If there are no numbers, print “NO”.
	Example_

Test Input: 5 and 20
Expected Output: 5 10 20


Test Input:6 and 20
Expected Output:“NO”


*/

// point 1 : make a function that take 2 inputs and return if the input numbers are multiples of a but divisors of b

// point 2 : if the input numbers are correctly multiples of divisors than print the output

// point 3 : if the input numbers are wrong then print the output ==> "NO"

function printNumber(a, b) {
	let output = ' ';
	let count = 0;

	for (let i = a; i <= b; i++) {
		if (b % i === 0 && i % a === 0) {
			output += ' ' + i;
			count++;
		}
	}
	if (count === 0) {
		output = ' NO ';
	}

	return console.log(output);
}

printNumber(1, 1); /// 1
printNumber(5, 20); /// 5,10,20
printNumber(5, 32); /// NO
printNumber(6, 20); /// NO
