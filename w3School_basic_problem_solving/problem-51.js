'use strict ';
console.log('working....');

// task : Sort an array of all prime numbers between 1 and a given integer.

// point: solution 1 ( using nested for loop and condition )

function primeNumbers(num) {
	let primeNum1 = [];
	let primeNum2 = [];

	for (let i = 0; i <= num; i++) {
		primeNum2.push(true);
	}

	for (let i = 2; i <= num; i++) {
		if (primeNum2[i]) {
			primeNum1.push(i);

			for (let j = 1; i * j <= num; j++) {
				primeNum2[i * j] = false;
			}
		}
	}

	return primeNum1;
}

console.log(primeNumbers(5));
console.log(primeNumbers(11));
console.log(primeNumbers(19));

// point: solution 2 ( Array, map, Math, forEach  and Filter method )

function primeNumbers2(num) {
	let primeNum = Array.from({ length: num - 1 }).map((arr, i) => i + 2);

	let sqroot = Math.floor(Math.sqrt(num));

	let numsTillSqroot = Array.from({ length: sqroot - 1 }).map(
		(arr, i) => i + 2,
	);

	numsTillSqroot.forEach((x) => {
		primeNum = primeNum.filter((y) => y % x !== 0 || y === x);
	});

	return primeNum;
}

console.log('solution 2');
console.log(primeNumbers2(5));
console.log(primeNumbers2(11));
console.log(primeNumbers2(19));

console.log('------------ another problem --------------');

// task : Find the number of even values in sequence before the first occurrence of a given number.
const sample = [1, 2, 3, 4, 5, 6, 7, 8];
const sample2 = [1, 3, 5, 6, 7, 8];
// point :  solution 1 ( using for loop and condition )

function evenNumbers(arr, num) {
	let result = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0 && arr[i] !== num) {
			result++;
		}
		if (arr[i] === num) {
			return result;
		}
	}
	return -1;
}

console.log(evenNumbers(sample, 5));
console.log(evenNumbers(sample2, 6));

// point :  solution 2 ( using reduce method )
