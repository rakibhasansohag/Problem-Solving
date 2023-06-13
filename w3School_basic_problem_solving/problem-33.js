'use strict';
console.log('working...');

// task : Capitalize the first letter of each word of a given string

// point : solution 1
function capitalizeWOrds(str) {
	let words = str.split(' ');

	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		let firstLetter = word[0].toUpperCase();
		let rest = word.slice(1);
		let capitalized = firstLetter + rest;
		words[i] = capitalized;
	}

	return words.join(' ');
}

console.log(capitalizeWOrds('I am a web developer'));

// point : solution 2

function capitalizeWOrds2(str) {
	let words = str.split(' ');
	let capitalized = [];

	for (let word of words) {
		capitalized.push(word[0].toUpperCase() + word.slice(1));
	}
	return capitalized.join(' ');
}

console.log(capitalizeWOrds2('I am a web developer'));

// task : Convert a given number to hours and minutes

// point : solution 1

function convertTimeIntoHoursAndMinutes(num) {
	let hours = Math.floor(num / 60);
	let minutes = num % 60;
	return `${hours} hours and ${minutes} minutes`;
}

console.log(convertTimeIntoHoursAndMinutes(200));
console.log(convertTimeIntoHoursAndMinutes(100));

// point : solution 2

function convertTimeIntoHoursAndMinutes2(nums) {
	let hours = Math.floor(nums / 60);
	let minutes = nums % 60;

	return `${hours} hours  and ${minutes} minutes`;
}

console.log(convertTimeIntoHoursAndMinutes2(200));
console.log(convertTimeIntoHoursAndMinutes2(100));

// task : Convert the letters of a given string in alphabetical order

// point : solution 1 ( using built-in methods )

function convertLettersIntoAlphabeticalOrder(str) {
	let letters = str.split('');

	let sorted = letters.sort();

	return sorted.join('');
}
console.log(convertLettersIntoAlphabeticalOrder('webmaster'));

// point: solution 2 ( using for loop )
