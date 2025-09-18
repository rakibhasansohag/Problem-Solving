/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor.
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
	// This line prints 'Hello, World!' to the console:
	console.log('Hello, World!');

	// Write a line of code that prints parameterVariable to stdout using console.log:
	const text = console.log(parameterVariable);
	return text;
}

// greeting('Welcome to 10 Days of JavaScript!');

/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/

function performOperation(secondInteger, secondDecimal, secondString) {
	// Declare a variable named 'firstInteger' and initialize with integer value 4.
	const firstInteger = 4;

	// Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
	const firstDecimal = 4.0;

	// Declare a variable named 'firstString' and initialize with the string "HackerRank".
	const firstString = 'HackerRank ';

	// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

	// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

	// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.

	// Declare secondLine variable

	// Print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line
	console.log(firstInteger + Number(secondInteger));

	// Print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line
	console.log(firstDecimal + Number(secondDecimal));

	const secondLine = console.log(firstString + secondString);

	return secondLine;
}

performOperation('3', '6.0', 'is the best place to learn and practice coding!');
