'use strict';
// Task : Create a new object from the specified object, where all the keys are in lowercase.

// point: using Object.keys

const lowercaseKeys = (obj) =>
	Object.keys(obj).reduce((acc, key) => {
		// acc[key.charAt(0).toUpperCase() + key.slice(1)] = obj[key];
		acc[key.toLowerCase()] = obj[key];
		return acc;
	}, {});

const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj);
console.log(myObjLower);

// Point : using for...in loop

const lowercaseKeys1 = (obj) => {
	const result = {};

	for (const key in obj) {
		result[key.toLowerCase()] = obj[key];
	}

	return result;
};

const myObj1 = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower1 = lowercaseKeys1(myObj1);
console.log(myObjLower1);

// Task : Get the last element from a given array.

const lastElement = (arr) => arr[arr.length - 1];

console.log(lastElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task : Join all elements of an array into a string and returns this string.

// Point : using Array.join()
const joinArray = (arr, separator = '', end = separator) =>
	arr.reduce((acc, val, i) => {
		return i === arr.length - 2
			? acc + val + end
			: i === arr.length - 1
			? acc + val
			: acc + val + separator;
	}, '');

console.log(joinArray(['pen', 'pineapple', 'apple', 'pen'], ',', '&'));
console.log(joinArray(['pen', 'pineapple', 'apple', 'pen'], ','));
console.log(joinArray(['pen', 'pineapple', 'apple', 'pen']));

// Point: without using any built-in functions

const joinArray1 = (arr, separator = '', end = separator) => {
	let result = '';

	for (let i = 0; i < arr.length; i++) {
		result += arr[i];

		if (i < arr.length - 1) {
			result += separator;
		}

		if (i === arr.length - 1) {
			result += end;
		}
	}

	return result;
};

console.log(joinArray1(['pen', 'pineapple', 'apple', 'pen'], ',', '&'));
console.log(joinArray1(['pen', 'pineapple', 'apple', 'pen'], ','));
console.log(joinArray1(['pen', 'pineapple', 'apple', 'pen']));

// Task : Check whether the provided argument is a valid JSON.

// Point : using JSON.parse
const isValidJSON = (obj) => {
	if (obj === null) return false;

	if (typeof obj !== 'string') return false;

	try {
		JSON.parse(obj);
		return true;
	} catch (e) {
		return false;
	}
};
console.log(isValidJSON('{"name":"Adam","age":20}')); // true (valid JSON)
console.log(isValidJSON('{"name":"Adam",age:"20"}')); // false (invalid JSON)
console.log(isValidJSON(null));

// Task : Check if a given string is upper case or not.
const isUpperCase = (str) => str === str.toUpperCase();
console.log(isUpperCase('ABC')); // true (all characters are uppercase)
console.log(isUpperCase('A3@$')); // true (all characters are uppercase)
console.log(isUpperCase('aB4')); // false (contains lowercase characters)

console.log('other');
// Task : Return true if the specified value is undefined, false otherwise.
const isUndefined = (val) => val === undefined;
console.log(isUndefined(undefined)); // true (the value is undefined)
console.log(isUndefined('')); // false (the value is not undefined)

// Task : Check whether the given argument is a symbol or not.
const isSymbol = (val) => typeof val === 'symbol';
console.log(isSymbol(Symbol('x'))); // true (Symbol('x') is a symbol)
console.log(isSymbol(Symbol(1))); // true (Symbol(1) is a symbol)
console.log(isSymbol(Symbol(')'))); // true (Symbol(')') is a symbol)
console.log('symobol');

// Task : Check whether the given argument is a string.
const isString = (val) => typeof val === 'string';
console.log(isString('10')); // true ('10' is a string)
console.log(isString(1)); //false
