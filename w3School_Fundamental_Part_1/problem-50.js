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
