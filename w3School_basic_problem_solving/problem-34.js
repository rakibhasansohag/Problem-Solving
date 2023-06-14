'use strict';
console.log('working...');

// task : Check whether the characters a and b are separated by exactly 3 places anywhere in a given string

// point : solution 1 ;

function ab_Check(str) {
	return /a...b/.test(str) || /b...a/.test(str);
}

console.log(ab_Check('Chainsbreak'));
console.log(ab_Check('pane borrowed'));

// task : Count the number of vowels in a given string

// point : solution 1 ;

function vowel_Count(str) {
	return str.match(/[aeiou]/gi).length;
}

console.log(vowel_Count('The quick brown fox'));
console.log(vowel_Count('Google.com'));

// point: solution 2 ;

function vowel_Count3(str) {
	return str.replace(/[^aeiou]/g, '').length;
}

console.log(vowel_Count3('The quick brown fox'));
console.log(vowel_Count3('Google.com'));

// task : Check whether a given string contains equal number of p's and t's

// point : solution 1 ;

function equal_pt(str) {
	let stringP = str.replace(/[^p]/g, '');
	let stringT = str.replace(/[^t]/g, '');
	let pNumber = stringP.length;
	let tNumber = stringT.length;

	return pNumber === tNumber;
}

console.log(equal_pt('paatpss'));
console.log(equal_pt('paatps'));
console.log(equal_pt('ptptpt'));

// task : Divide two positive numbers and return a string with properly formatted commas

// point : solution 1 :

function division_string(n1, n2) {
	let result = Math.round(n1 / n2).toString();
	let resultArray = result.split('');

	if (result >= 1000) {
		for (let i = resultArray.length - 3; i > 0; i -= 3) {
			resultArray.splice(i, 0, ',');
		}
	}
	return resultArray;
}
console.log(division_string(80, 6));

// point :  solution 2 :

function divisionString(number1, number2) {
	let result = Math.round(number1 / number2).toString();

	let resultArray = result.split('');

	if (result >= 1000) {
		for (let i = resultArray.length - 3; i > 0; i -= 3) {
			resultArray.splice(i, 0, ',');
		}
	}

	return resultArray;
}

console.log(divisionString(80, 6));
