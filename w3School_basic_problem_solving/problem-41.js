'use strict';
console.log('working...');

// task :Swap the first and last elements of a given array of integers

// point : solution 1;

function swapArray(arr) {
	let temp = arr[0];
	arr[0] = arr[arr.length - 1];
	arr[arr.length - 1] = temp;
	return arr;
}
console.log(swapArray([1, 2, 3, 4, 5]));

// point : solution 2;

function swapArray2(arr) {
	let first = arr.shift();
	let last = arr.pop();

	arr.unshift(last);
	arr.push(first);

	return arr;
}
console.log(swapArray2([1, 2, 3, 4, 5]));

// point : solution 3;

function swapArray3(arr) {
	[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
	return arr;
}

console.log(swapArray3([1, 2, 3, 4, 5]));

// point : solution 4;

function swapArray4(arr) {
	let temp = arr[0];

	arr[0] = arr[arr.length - 1];
	arr[arr.length - 1] = temp;
	return arr;
}

console.log(swapArray4([1, 2, 3, 4, 5]));

console.log('-------------another problems --------------');

// task : Add two digits of a given positive integer of length two

// point : solution 1;

function addTwoDigits(num) {
	return (num % 10) + Math.floor(num / 10);
}

console.log(addTwoDigits(25));
console.log(addTwoDigits(50));

// point : solution 2 ( using built in function )

function addTwoDigits2(num) {
	let str = num.toString();
	let arr = str.split('');

	return arr.reduce((a, b) => parseInt(a) + parseInt(b));
}

console.log(addTwoDigits2(25));
console.log(addTwoDigits2(50));

// task : Add two positive integers without carry

// point : solution 1;
function addTwoDigitsWithOutCarrying(num1, num2) {
	let sum = 0;
	let carrying = 1;

	while (num1 > 0 && num2 > 0) {
		sum += carrying * ((num1 + num2) % 10);

		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);

		carrying *= 10;
	}
	return sum;
}

console.log(addTwoDigitsWithOutCarrying(222, 911));
console.log(addTwoDigitsWithOutCarrying(200, 900));

// point: solution 2;

function addTwoDigitsWithOutCarrying2(num1, num2) {
	let result = 0;
	let ten = 1;

	while (num1 > 0 && num2 > 0) {
		result += ten * ((num1 + num2) % 10);

		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);

		ten *= 10;
	}
	return result;
}

console.log(addTwoDigitsWithOutCarrying2(222, 911));
console.log(addTwoDigitsWithOutCarrying2(200, 900));
