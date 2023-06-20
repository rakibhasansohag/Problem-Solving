'use strict';
console.log('working...');

// task : Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.

// point : solution 1

function checkingNumbers(x, y, divisor) {
	if (
		(x % divisor === 0 && y % divisor === 0) ||
		(x % divisor !== 0 && y % divisor !== 0)
	) {
		return true;
	} else {
		return false;
	}
}

console.log(checkingNumbers(10, 25, 5));
console.log(checkingNumbers(10, 20, 5));
console.log(checkingNumbers(10, 20, 4));

// point : solution 2 ( ternary operator )

function checkingNumbers2(x, y, divisor) {
	return (x % divisor === 0 && y % divisor === 0) ||
		(x % divisor !== 0 && y % divisor !== 0)
		? true
		: false;
}

console.log(checkingNumbers2(10, 25, 5));
console.log(checkingNumbers2(10, 20, 5));
console.log(checkingNumbers2(10, 20, 4));

console.log('--------------------- another problems ---------------------');

// task : Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.

/// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

function checkingNumbers3(x, y, z) {
	return x + y === z || x - y === z || x * y === z || x / y === z;
}

console.log(checkingNumbers3(10, 25, 35));
console.log(checkingNumbers3(10, 25, 250));
console.log(checkingNumbers3(10, 25, 2500));
console.log(checkingNumbers3(10, 25, 2.5));
console.log(checkingNumbers3(10, 25, 0.4));
console.log(checkingNumbers3(10, 25, 0.04));

console.log('--------------------- another problems ---------------------');

// task : Find the kth greatest element of a given array of integers

// point : solution 1 ( using sort method )
function kthGreatest(arr, k) {
	return arr.sort((a, b) => b - a)[k - 1];
}

console.log(kthGreatest([1, 2, 3, 4, 5], 2));
console.log(kthGreatest([1, 2, 3, 4, 5], 3));

// point : solution 2 ( using for loop method )

function kthGreatest2(arr, k) {
	let temp;

	for (let i = 0; i < arr.length; i++) {
		let max = i;
		temp = arr[i];

		for (let i = i + 1; i < arr.length; i++) {
			if (arr[i] > arr[max]) {
				max = i;
			}
		}

		arr[i] = arr[max];
		arr[max] = temp;
	}
	return arr[k - 1];
}
console.log(kthGreatest([1, 2, 3, 4, 5], 2));
console.log(kthGreatest([1, 2, 3, 4, 5], 3));
