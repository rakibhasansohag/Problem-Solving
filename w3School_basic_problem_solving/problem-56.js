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
