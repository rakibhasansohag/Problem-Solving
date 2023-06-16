'use strict  ';
console.log('working...');

// task : Create a string using the middle three characters of a given string of odd length

// point : solution 1;

function middle_three_chars(str) {
	if (str.length % 2 != 0) {
		let mid = (str.length - 1) / 2;
		return str.substring(mid - 1, mid + 2);
	} else {
		return str;
	}
}

console.log(middle_three_chars('abcdefg'));
console.log(middle_three_chars('HTML5'));
console.log(middle_three_chars('Python'));

// point: solution 2 ;

function middleThreeChars(str) {
	if (str.length % 2 != 0) {
		let mid = (str.length - 1) / 2;
		return str.slice(mid - 1, mid + 2);
	}
	return str;
}

console.log(middleThreeChars('abcdefg'));
console.log(middleThreeChars('HTML5'));
console.log(middleThreeChars('Python'));

console.log('----------------task 2-----------------');

// task : Concatenate two strings and return the result

// point : solution 2 ;

function concatenate(str1, str2) {
	const str = Math.min(str1.length, str2.length);

	return str1.substring(str1.length - str) + str2.substring(str2.length - str);
}

console.log(concatenate('Python', 'JS'));
console.log(concatenate('ab', 'cdef'));

function concatenate2(str1, str2) {
	const str3 = Math.min(str1.length, str2.length);

	return (
		str1.substring(str1.length - str3) + str2.substring(str2.length - str3)
	);
}

console.log(concatenate2('Python', 'JS'));
console.log(concatenate2('ab', 'cdef'));

console.log('----------------task 3-----------------');

// task : Test whether a string end with "Script"

// point : solution 1 ;

const endScript = (str) => {
	if (str.substring(str.length - 6, str.length) === 'Script') {
		return true;
	} else {
		return false;
	}
};

console.log(endScript('JavaScript'));
console.log(endScript('Java Script'));
console.log(endScript('Python'));

// point : solution 2 ;

function endScript2(str) {
	if (str.substring(str.length - 6, str.length) === 'Script') return true;
	return false;
}

console.log(endScript2('JavaScript'));
console.log(endScript2('Java Script'));
console.log(endScript2('Python'));
