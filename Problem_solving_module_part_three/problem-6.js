'use strict ';
console.log('working.......');

// task : calculate the sum of numbers within an array .

// point : solution 1 : with out using any built in function

const sumOfArray = (arr) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
};

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); /// 55

// point : solution 2 : with using reduce function

const sumOfArray2 = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

console.log(sumOfArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); /// 55
