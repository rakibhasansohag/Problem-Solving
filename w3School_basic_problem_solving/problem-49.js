'use strict';
console.log('working...');

//  task : Find the maximum number from a given positive integer by deleting exactly one digit of the given number.

// point: solution 1 : ( for loop and while loop ( w3School  solution) )

function findMaxNumber(num) {
	let result = 0;
	let numDigits = [];

	while (num) {
		numDigits.push(num % 10);
		num = Math.floor(num / 10);
	}

	for (let i = 0; i < numDigits.length; i++) {
		let temp = 0;

		for (let j = numDigits.length - 1; j >= 0; j--) {
			if (j !== i) {
				temp = temp * 10 + numDigits[j];
			}
		}

		result = Math.max(result, temp);
	}
	return result;
}

console.log(findMaxNumber(100));
console.log(findMaxNumber(10));
console.log(findMaxNumber(1234));

// point : solution 2 :  ( toString , split and  reduce method  )

function findMaxNumber2(num) {
	let numDigits = num.toString().split('');

	let result = numDigits.reduce((acc, cur, index) => {
		let temp = numDigits.filter((el, i) => i !== index).join('');
		return Math.max(acc, temp);
	}, 0);

	return result;
}

console.log(findMaxNumber2(100));
console.log(findMaxNumber2(10));
console.log(findMaxNumber2(1234));

// point : solution 3 :  ( toString  , split , filter and  reduce method  )

function findMaxNumber3(num) {
	let numDigits = num.toString().split('');

	let result = numDigits.reduce((acc, cur, index) => {
		let temp = numDigits.filter((el, i) => i !== index).join('');

		return Math.max(acc, temp);
	}, 0);
	return result;
}

console.log(findMaxNumber3(100));
console.log(findMaxNumber3(10));
console.log(findMaxNumber3(1234));

console.log('---------------- another problems -----------------');

// task : Find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer .

// point : solution 1 : ( nested for loop and Math.abs method )

function findTwoElements(arr, num) {
	let max = -1; // 0

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let diff = Math.abs(arr[i] - arr[j]);

			if (diff <= num) {
				max = Math.max(max, diff);
			}
		}
	}
	return max;
}

console.log(findTwoElements([12, 10, 33, 34], 10));
console.log(findTwoElements([12, 10, 33, 34], 24));

// point: solution 2 : ( map , filter and Math.abs and for loop with Math.max method )

function findTwoElements2(arr, num) {
	let result = arr.map((el, i) => {
		return arr.filter((el2, j) => j !== i).map((el3) => Math.abs(el - el3));
	});

	let max = -1;

	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result[i].length; j++) {
			if (result[i][j] <= num) {
				max = Math.max(max, result[i][j]);
			}
		}
	}
	return max;
}

console.log(findTwoElements2([12, 10, 33, 34], 10));
console.log(findTwoElements2([12, 10, 33, 34], 24));

// point: solution 3 : ( map , filter and Math.abs and for loop with Math.max method )

function findTwoElements3(arr, num) {
	let result = arr.map((el, i) => {
		return arr
			.filter((el2, j) => j !== i)
			.map((el3) => {
				return Math.abs(el - el3);
			});
	});

	let max = -1; /// 0

	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result[i].length; j++) {
			if (result[i][j] <= num) {
				max = Math.max(max, result[i][j]);
			}
		}
	}
	return max;
}

console.log(findTwoElements3([12, 10, 33, 34], 10));
console.log(findTwoElements3([12, 10, 33, 34], 24));

// task : Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
console.log('---------------- another problems -----------------');
// point : solution 1 : ( while loop W3 school solution  )

function findNumberOfTimes(num) {
	const digitSum = (num) => {
		let sum = 0;

		while (num) {
			sum += num % 10;
			num = Math.floor(num / 10);
		}

		return sum;
	};

	let result = 0;

	while (num >= 10) {
		result += 1;
		num = digitSum(num);
	}
	return result;
}

console.log(findNumberOfTimes(123));
console.log(findNumberOfTimes(156));

// point : solution 2 : ( while loop and toString , split , reduce method )

function findNumberOfTimes2(num) {
	let sum = num
		.toString()
		.split('')
		.reduce((acc, cur) => {
			return acc + Number(cur);
		}, 0);

	let result = 1;

	while (sum >= 10) {
		result += 1;

		sum = sum
			.toString()
			.split('')
			.reduce((acc, cur) => {
				return acc + Number(cur);
			}, 0);
	}

	return result;
}

console.log(findNumberOfTimes2(123));
console.log(findNumberOfTimes2(156));
