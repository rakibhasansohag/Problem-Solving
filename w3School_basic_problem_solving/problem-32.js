'use strict';
console.log('working....');

// task : Replace every character in a given string with the character following it in the alphabet

// point: solution 1

// / reference : https://codereview.stackexchange.com/questions/32620/replacing-every-letter-in-a-string-with-the-letter-following-it-in-the-alphabet

function letterChange(text) {
	let string = text.split('');

	for (let i = 0; i < string.length; i++) {
		switch (string[i]) {
			case ' ':
				break;

			case 'z':
				string[i] = 'a';
				break;

			case 'Z':
				string[i] = 'A';
				break;

			default:
				string[i] = String.fromCharCode(1 + string[i].charCodeAt(0));
				break;
		}

		switch (string[i]) {
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				string[i] = string[i].toUpperCase();
		}
	}

	return string.join('');
}
console.log(letterChange('hello world'));
console.log(letterChange('fun times!'));
console.log(letterChange('PYTHON'));

// point: solution 2

let text = prompt('Enter a string: ');
let newText = '';
let newText2 = '';

for (let i = 0; i < text.length; i++) {
	if (text.charAt(i) === ' ') {
		newText = newText.concat(' ');
	} else if (text.charAt(i) === 'z') {
		newText = newText.concat('a');
	} else {
		newText = newText.concat(String.fromCharCode(text.charCodeAt(i) + 1));
	}
}

for (let j = 0; j < newText.length; j++) {
	switch (newText.charAt(j)) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			newText2 = newText2 + newText.charAt(j).toUpperCase();
			break;

		default:
			newText2 = newText2 + newText.charAt(j);
			break;
	}
}
console.log(newText2);
