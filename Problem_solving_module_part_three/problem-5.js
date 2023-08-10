'use strict';
console.log('working.......');
// task :  return the number of vowels in a string .

// point : solution 1 : with out using any built in function
// / vowel = a , e , i , o , u  / from google
const countVowels = (str) => {
	let count = 0;
	let vowels = ['a', 'e', 'i', 'o', 'u'];

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < vowels.length; j++) {
			if (str[i] === vowels[j]) {
				count++;
			}
		}
	}

	return count;
};

console.log(countVowels('hello world'));
console.log(countVowels('hello i am rakib hasan sohag :)'));
