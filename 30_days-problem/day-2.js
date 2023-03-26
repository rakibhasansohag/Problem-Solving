' use strict';
// Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string.
// Example:
// Input: ”Lorem ipsum dolor sit amet consectetur”
// Output: 6

// Constraints:
// using built-in functions is prohibited
//  for counting the number of sentences

// firs solution for each of the characters in the words

function countCharacters(str) {
	let countCharacter = 0;

	for (let i = 0; i < str.length; i++) {
		countCharacter++;
	}
	return countCharacter;
}

console.log('==>', countCharacters('this is ')); // 8

//  todo: second solution for each word
const countWords = (str) => {
	let countWord = 0;
	let isWord = false;
	for (let i = 0; i < str.length; i++) {
		if (
			// for skipping the space
			str[i] === ' ' ||
			str[i] === '\n' ||
			str[i] === '\t' ||
			str[i] === '.'
		) {
			if (isWord) {
				countWord++;
				isWord = false;
			}
		} else {
			isWord = true;
		}
	}

	if (isWord) {
		countWord++;
	}
	return countWord;
};

('');
console.log(countWords('hello this')); // 2 words
console.log(
	countWords(
		'Lorem ipsum,		 dolor sit amet consectetur adipisicing 	 elit. Adipisci, quaerat, explicabo distinctio quisquam sapiente vel ut 	 rerum quas aspernatur sed dolorum eveniet quam iste! Sequi possimus cum consequuntur similique optio .',
	),
); // 30 words
