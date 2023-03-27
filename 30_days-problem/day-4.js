'use strict';
/*
Write a JavaScript Function that takes a word and returns the new word without including the first two characters.
If string length less than 2 return -1,
If the string length is 2 returns 1
If the string length is equal to 2 then follow the below examples.
Example 1:
Input: array
Output: ray 
Example 2:
Input: object
Output: ject
Constraints:
Word length cannot be negative.
*/
// point 1 :  first set a function for removing the first two letter of the word.

// point 2 : than set a condition for if the word contains more than 2 characters than slice the word length and return a new string. (words) ==> (rds)

// point 2.1 : what if there are only 2 characters in the word ===> solution is ( i don't know)

// point 2.2 : what if there are negative characters in the word ===> solution is ( i don't know)
const myFunc = (str) => {
	if (str.length <= 0) {
		return console.log(
			`you are not allowed to give negative words in the string`,
		);
	} else if (str.length === 2) {
		return -1;
	} else {
		return str.slice(2);
	}
};

console.log(myFunc('this is fine')); // is is fine
console.log(myFunc('object')); // ject
console.log(myFunc('ob')); //-1
console.log(myFunc('o')); // error
console.log(myFunc('')); // you are not allowed to
