'use strict ';
console.log('working...');

// task : Find the smallest round number that is not less than a given value.

// point : solution 1 (  while loop )
console.time('nearestRoundNumber1');
function nearestRoundNumber(value) {
	while (value % 10 !== 0) {
		value++;
	}
	return value;
}

console.log(nearestRoundNumber(22)); /// 30
console.log(nearestRoundNumber(56)); /// 60
console.log(nearestRoundNumber(592)); /// 600

console.timeEnd('nearestRoundNumber1');

// point : solution 2 (  for loop )

console.time('nearestRoundNumber2');

function nearestRoundNumber1(value) {
	for (let i = value; i < value + 10; i++) {
		if (i % 10 === 0) {
			return i;
		}
	}
}

console.log(nearestRoundNumber1(22)); /// 30
console.log(nearestRoundNumber1(56)); /// 60
console.log(nearestRoundNumber1(592)); /// 600

console.timeEnd('nearestRoundNumber2');

console.log('---------------------- another problem ----------------------');

// task : Find the smallest prime number strictly greater than a given number

// point : solution 1 ( nested for loop )
console.time('smallestPrimeNumber1');
function smallestPrimeNumber(value) {
	for (let i = value + 1; ; i++) {
		let isPrime = true;

		for (let j = 2; j * j <= i; j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			return i;
		}
	}
}
console.log(smallestPrimeNumber(3)); /// 5
console.log(smallestPrimeNumber(17)); /// 19
console.log(smallestPrimeNumber(23)); /// 29

console.timeEnd('smallestPrimeNumber1');

// point : solution 2 ( while loop )

console.time('smallestPrimeNumber2');

function smallestPrimeNumber1(value) {
	let i = value + 1;
	while (true) {
		let isPrime = true;

		for (let j = 2; j * j <= i; j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			return i;
		}
		i++;
	}
}

console.log(smallestPrimeNumber1(3)); /// 5
console.log(smallestPrimeNumber1(17)); /// 19
console.log(smallestPrimeNumber1(23)); /// 29

console.timeEnd('smallestPrimeNumber2');

console.log('---------------------- another problem ----------------------');

// task : Find the number of even digits in a given integer..

// point : solution 1 ( for loop )

console.time('evenDigits1');

function evenDigits(value) {
	let count = 0;
	for (let i = value; i > 0; i = Math.floor(i / 10)) {
		if (i % 2 === 0) {
			count++;
		}
	}
	return count;
}

console.log(evenDigits(123)); /// 1
console.log(evenDigits(1020)); /// 3
console.log(evenDigits(102)); /// 2

console.timeEnd('evenDigits1');

// point : solution 2 ( while loop )

console.time('evenDigits2');

function evenDigits1(value) {
	let count = 0;

	while (value) {
		count += value % 2 === 0;
		value = Math.floor(value / 10);
	}
	return count;
}

console.log(evenDigits1(123)); /// 1
console.log(evenDigits1(1020)); /// 3
console.log(evenDigits1(102)); /// 2

console.timeEnd('evenDigits2');

console.log('---------------------- another problem ----------------------');
/*
task : Write a JavaScript program to create an array of prefix sums of the given array.

   : In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
y0 = x0
y1 = x0 + x1
y2 = x0 + x1+ x2

point : solution 1 ( nested  for loop )
*/

console.time('prefixSums1');

function prefixSums(array) {
	let result = [];

	for (let i = 0; i < array.length; i++) {
		result[i] = 0;

		for (let j = 0; j < i + 1; j++) {
			result[i] += array[j];
		}
	}
	return result;
}

console.log(prefixSums([1, 2, 3, 4, 5])); /// [1, 3, 6, 10, 15]
console.log(prefixSums([1, 2, -3, 4, 5])); /// [1, 3, 0, 4, 9]

console.timeEnd('prefixSums1');

// point : solution 2 ( reduce method )

console.time('prefixSums2');

function prefixSums1(array) {
	return array.reduce((result, item, index) => {
		result[index] = (result[index - 1] || 0) + item;
		return result;
	}, []);
}

console.log(prefixSums1([1, 2, 3, 4, 5])); /// [1, 3, 6, 10, 15]
console.log(prefixSums1([1, 2, -3, 4, 5])); /// [1, 3, 0, 4, 9]

console.timeEnd('prefixSums2');
