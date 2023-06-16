'use strict';
console.log('working...');

// task : Display the city name if the string begins with "Los" or "New" otherwise return blank

// point : solution 1;

function cityName(str) {
	if (
		str.length >= 3 &&
		(str.substring(0, 3) == 'Los' || str.substring(0, 3) == 'New')
	) {
		return str;
	} else {
		return '';
	}
}

console.log(cityName('New York'));
console.log(cityName('Los Angeles'));
console.log(cityName('London'));

// point : solution 2;

function cityName2(str) {
	if (
		(str.length >= 3 && str.substring(0, 3) == 'Los') ||
		str.substring(0, 3) === 'New'
	) {
		return str;
	} else {
		return 'blank City';
	}
}

console.log(cityName2('New York'));
console.log(cityName2('Los Angeles'));
console.log(cityName2('London'));

console.log('----------------task 2-----------------');

//  task : Create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the new string

// point : solution 1;

function newString(str) {
	let startPosition = 0;
	let endPosition = str.length;

	if (str.length > 0 && str.charAt(0) == 'P') {
		startPosition = 1;
	}

	if (str.length > 1 && str.charAt(str.length - 1) == 'P') {
		endPosition--;
	}

	return str.substring(startPosition, endPosition);
}

console.log(newString('PythonP'));
console.log(newString('Python'));
console.log(newString('JavaScript'));

// point : solution 2;

function newString2(str) {
	let startPosition = str.charAt(0) == 'P' ? 1 : 0;
	let endPosition =
		str.charAt(str.length - 1) == 'P' ? str.length - 1 : str.length;

	return str.substring(startPosition, endPosition);
}

console.log(newString2('PythonP'));
console.log(newString2('Python'));
console.log(newString2('JavaScript'));

console.log('----------------task 3-----------------');

// task  : Create a new string taking the first and last n characters from a given string .

// point : solution 1;

function newString(str, n) {
	let startPosition = str.substring(0, n);
	let lastPosition = str.substring(str.length - n, str.length);

	return startPosition + lastPosition;
}
console.log(newString('JavaScript', 2));
console.log(newString('JavaScript', 3));

// point : solution 2;

function newString2(str, n) {
	if (str.length > 1) {
		return str.slice(0, n) + str.slice(-n);
	} else {
		return str;
	}
}

console.log(newString2('JavaScript', 2));
console.log(newString2('JavaScript', 3));
