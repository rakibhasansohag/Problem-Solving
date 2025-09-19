/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
	if (typeof s !== 'string') {
		console.log('s.split is not a function');
		console.log(s);
		return;
	}

	let = reversed = '';
	for (let i = s.length - 1; i >= 0; i--) {
		reversed += s[i];
	}

	console.log(reversed);
}

reverseString('hello');

/**
 * Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

If , then .
If , then .
If , then .
If , then .
If , then .
If , then .
Input Format

Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

Constraints

Output Format

The function must return the value of  (i.e., the letter grade) that Julia earned on the exam.

Sample Input 0

11
Sample Output 0

D
 * 
 */

function getGrade(score) {
	let grade;

	if(typeof score !== 'number') return console.log('score is not a number');

	if (score < 0 || score >= 30) return console.log('score is out of range');

	// Write your code here
	if (25 < score && score <= 30) return (grade = 'A');
	if (20 < score && score <= 25) return (grade = 'B');
	if (15 < score && score <= 20) return (grade = 'C');
	if (10 < score && score <= 15) return (grade = 'D');
	if (5 < score && score <= 10) return (grade = 'E');
	if (0 < score && score <= 5) return (grade = 'F');
	return grade;
}


function getLetter(s) {
	const firstChar  = s[0];

	switch(firstChar) {
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
			return "A";
		case "b":
		case "c":
		case "d":
		case "f":
		case"g":
			return "B";
		case "h":
		case "j":
			case "k":
				case "l": 
				case "m":
					return "C";
				
		default:
			return "D";
			
	}
}
console.log(getLetter('adfgt')); // A
console.log(getLetter('zebra')); // D