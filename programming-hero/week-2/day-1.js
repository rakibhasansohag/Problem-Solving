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
