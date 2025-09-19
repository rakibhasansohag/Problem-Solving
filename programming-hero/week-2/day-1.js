/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 * 
 * Task

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
Function Description

Complete the vowelsAndConsonants function in the editor below.

vowelsAndConsonants has the following parameters:

string s: the string to process
Prints

Print each vowel of  in order on a new line, then print each consonant in order on a new line. Return nothing.
Input Format

There is one line of input with the string .

Output Format

First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).
 */

// function vowelsAndConsonants(s) {
// 	const vowel = ['a', 'e', 'i', 'o', 'u'];
// 	const consonant = [];

// 	for (let i = 0; i < s.length; i++) {
// 		if (vowel.includes(s[i])) {
// 			console.log(s[i]);
// 		} else {
// 			consonant.push(s[i]);
// 		}
// 	}

// 	for (let i = 0; i < consonant.length; i++) {
// 		console.log(consonant[i]);
// 	}
// }

// vowelsAndConsonants('javascriptloops');

// Task to

function regexVar() {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
	 */

	const re = /^([aeiou]).*\1$/;

	/*
	 * Do not remove the return statement
	 */
	return re;
}

regexVar();

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
	area = Number(length) * Number(width)
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = Number(length) * 2 + Number(width) * 2
    
    return perimeter;
}

/*
*
Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

Input Format

Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

Constraints

Output Format

The function must return the value of .
*
**/
function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n -1)
}

console.log(factorial(1))

/**
 * 
 * Task

Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, , denoting the radius of a circle from stdin.
Use  and  to calculate the  and  of a circle having radius .
Print  as the first line of output and print  as the second line of output.
Input Format

A single integer, , denoting the radius of a circle.

Constraints

 is a floating-point number scaled to at most  decimal places.
Output Format

Print the following two lines:

On the first line, print the  of the circle having radius .
On the second line, print the  of the circle having radius .
 * 
 */

const PI = Math.PI

let r = 5;
let area = PI * r * r;
let perimeter = 2 * PI * r;

console.log(area);
console.log(perimeter);
