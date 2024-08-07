'use strict';
console.log('working...');

// Task : Check whether a value is object-like also check whether the provided value is not null and its typeof is equal to 'object'.
const isObjectLike = (value) => value !== null && typeof value === 'object';
console.log(isObjectLike({}));
console.log(isObjectLike([1, 2, 3]));
console.log(isObjectLike((x) => x));
console.log(isObjectLike(null));

// Task : Get a boolean determining if the passed value is an object or not.
const isObject = (obj) => obj === Object(obj);

console.log(isObject([1, 2, 3, 4]));
console.log(isObject([]));
console.log(isObject(['Hello!']));
console.log(isObject({ a: 1 }));
console.log(isObject({}));
console.log(isObject(true));

console.log('number ');

// Task :  Check if a given argument is a number.
const isNumber = (value) => typeof val === 'number';
console.log(isNumber('1'));
console.log(isNumber(1));

// Task : Return true if the specified value is null or undefined, false otherwise.
const isNull = (val) => val === null || val === undefined;

console.log(isNull(null));
console.log(isNull(undefined));
console.log(isNull(1));

console.log('is Empty or not...');
// Task : Return true if a value is an empty object, collection, map or set, has no enumerable properties or is any type that is not considered a collection.
const isEmpty = (val) => val == null || !(Object.keys(val) || val).length;

console.log(isEmpty(new Map())); // true (the Map is empty)
console.log(isEmpty(new Set())); // true (the Set is empty)
console.log(isEmpty([])); // true (the array is empty)
console.log(isEmpty({})); // true (the object is empty)
console.log(isEmpty('')); // true (the string is empty)
console.log(isEmpty([1, 2])); // false (the array is not empty)
console.log(isEmpty({ a: 1, b: 2 })); // false (the object is not empty)
console.log(isEmpty('text')); // false (the string is not empty)
console.log(isEmpty(123)); // true (numbers are considered empty)
console.log(isEmpty(true)); // true (booleans are considered empty)

console.log('is divisible...');
// Task : Check whether the first numeric argument is divisible by the second one.
const isDivisible = (divided, divisor) => divided % divisor === 0;
console.log(isDivisible(6, 3)); // true (6 is divisible by 3)
console.log(isDivisible(5, 3)); // false (5 is not divisible by 3)
console.log(isDivisible(100, 10)); // true (100 is divisible by 10)
console.log(isDivisible(0, 3)); // true (0 is divisible by any non-zero number)

console.log('----------------------- isEven -----------------------');
// Task : Check if a given number is even or not.
const isEven = (num) => num % 2 === 0;
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(0));
console.log(isEven(-2));

// Task : Determine whether the current runtime environment is a browser.
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
console.log(isBrowser());

// Task : Check whether the given argument is a native boolean element.
const isBoolean = (value) =>
	typeof value !== 'object' && typeof value === 'boolean';
console.log(isBoolean(true));
console.log(isBoolean(null));

console.log('--------- array like ---------');
// Task : Check whether the provided argument is array-like
const isArrayLike = (value) => {
	try {
		return [...value], true;
	} catch (e) {
		// console.log(e);
		return false;
	}
};

// console.log(isArrayLike(document.querySelectorAll('.className'))); // true (document.querySelectorAll('.className') returns a NodeList which is array-like)
console.log(isArrayLike('abc')); // true ('abc' is a string which is array-like)
console.log(isArrayLike(null)); // false (null is not array-like)

// Task : Check if a given string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).

const isAnagram = (str1, str2) => {
	const normalize = (str) =>
		str
			.toLowerCase()
			.replace(/[^a-z0-9]/gi, '')
			.split('')
			.sort()
			.join('');

	return normalize(str1) === normalize(str2);
};
console.log(isAnagram('iceman', 'cinema')); // true (both strings contain the same letters)
console.log(isAnagram('madam', 'madam')); // true (both strings are the same)
console.log(isAnagram('Hello', 'not')); // false (both strings are different)
