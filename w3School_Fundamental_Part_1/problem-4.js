'use strict ';
console.log('working...');

/*

todo : Write a JavaScript program to extract values at specified indexes from a specified array.

Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.

Set Array.prototype.length to mutate the passed in an array by resetting its length to 0.

Use Array.prototype.push() to re-populate it with only the pulled values.

Use Array.prototype.push() to keep track of pulled values.

*/

// point : ( solution 1 using filter() and includes() )

const pullAt = (arr, pullArr) => {
	let removed = [];

	let pulled = arr
		.map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
		.filter((v, i) => !pullArr.includes(i));

	arr.length = 0;

	pulled.forEach((v) => arr.push(v));

	return removed;
};

let myArray = ['a', 'b', 'c', 'd', 'e', 'f'];
let pulled = [1, 2, 3, 4, 5, 6, 7];

console.log(pullAt(myArray, [1, 3]));
console.log(pullAt(pulled, [4]));

// point : ( solution 2 using splice() )

const pullAt2 = (arr, pullArr) => {
	let removed = [];
	let pulled = arr;

	pullArr.forEach((v, i) => {
		removed.push(pulled.splice(v - i, 1)[0]);

		// console.log(removed);

		// console.log(pulled);
	});

	return removed;
};

let myArray2 = ['a', 'b', 'c', 'd', 'e', 'f'];
let pulled2 = [1, 2, 3, 4, 5, 6, 7];

console.log(pullAt2(myArray2, [1, 3]));
console.log(pullAt2(pulled2, [4]));

console.log('------------------ another problem ------------------');

/*

todo : Write a JavaScript program to generate a random hexadecimal color code.

Use Math.random() to generate a random 24-bit (6 * 4bits) hexadecimal number.
Use bit shifting and then convert it to an hexadecimal string using Number.prototype.toString(16). 

*/

// point : ( solution 1 using Math.random() and toString() )

const randomHexaDecimalColorCode = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0, 6);
};

console.log(randomHexaDecimalColorCode());
