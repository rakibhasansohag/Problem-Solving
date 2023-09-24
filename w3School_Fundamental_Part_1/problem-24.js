' use strict';
console.log('working...');

// Task : Create a new string with the results of calling a provided function on every character in the calling string.

// Point : solution 1 ( for loop )

const str = (str, func) => {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		newStr += func(str[i]);
	}
	return newStr;
};

console.log(str('Javascript exercises', (c) => c.toUpperCase()));
console.log(str('HTML IS A MOTHER OF ALL LANGUAGE', (c) => c.toLowerCase()));

// Point : solution 2 ( for of loop )

const str2 = (str, func) => {
	let newStr = '';
	for (const c of str) {
		newStr += func(c);
	}
	return newStr;
};

console.log(str2('Javascript exercises', (c) => c.toUpperCase()));
console.log(str2('HTML IS A MOTHER OF ALL LANGUAGE', (c) => c.toLowerCase()));

// Point : solution 3 ( map )

const str3 = (str, func) => {
	const newStr = str
		.split('')
		.map((c, i) => func(c, i, str))
		.join('');
	return newStr;
};

console.log(str3('Javascript exercises', (c) => c.toUpperCase()));
console.log(str3('HTML IS A MOTHER OF ALL LANGUAGE', (c) => c.toLowerCase()));
