' use strict ';
console.log('working....');

// task : Get the sum of a given array using the provided function.

// point : solution 1 using for loop

function sum(arr, n) {
	let result = 0;

	for (let i = 0; i < n; i++) {
		result += arr[i];
	}
	return result;
}

console.log(sum([2, 3, 4, 5], 3));
console.log(sum([2, 3, 4, 5], 4));

// point : solution 2 using recursion

function sum2(arr, n) {
	if (n <= 0) {
		return 0;
	} else {
		return sum(arr, n - 1) + arr[n - 1];
	}
}

console.log(sum2([2, 3, 4, 5], 3));
console.log(sum2([2, 3, 4, 5], 4));

// point : using reduce and map

function sum3(arr, n) {
	return arr
		.map((obj) => (typeof n === 'function' ? n(obj) : obj[n]))
		.reduce((acc, value) => acc + value, 0);
}

console.log(sum3([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(sum3([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));

// point : using reduce and map

function sum4(arr, n) {
	return arr.reduce((acc, value) => acc + value[n], 0);
}

console.log(sum4([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));
console.log(sum4([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));

console.log('------------ another problem  --------------');

// task : Get a random number in the specified range.

// point : solution 1 using Math.random() and min max

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomRange(1, 10));
console.log(randomRange(1, 5));
console.log(randomRange(-5, -2));
console.log(randomRange(0, 1));

console.log('------------ another problem  --------------');

// task : Get an array of given n random integers in the specified range.

// point : solution 1 using Math.random() and min max

function randomRange2(min, max, n) {
	let result = [];

	for (let i = 0; i < n; i++) {
		result.push(Math.floor(Math.random() * (max - min + 1) + min));
	}
	return result;
}

console.log(randomRange2(1, 10, 10));
console.log(randomRange2(-10, 10, 5));

// point : solution 2 using Math.random() and min max ( using Array.from )

function randomRange3(min, max, n = 1) {
	return Array.from({ length: n }, () =>
		Math.floor(Math.random() * (max - min + 1) + min),
	);
}
console.log('------------------');
console.log(randomRange3(1, 10, 10));
console.log(randomRange3(-10, 10, 5));

console.log('------------------ another problem ------------');

// task :  Create a function that invokes each provided function with the arguments it receives and returns the results.

// point  : solution 1 using apply nd speared operator.

const overTheFunction =
	(...myFunc) =>
	(...args) =>
		myFunc.map((fn) => fn.apply(null, args));

const minMax = overTheFunction(Math.min, Math.max);

console.log(minMax(1, 2, 3, 4, 5));
console.log(minMax(1, 2, 5, 4, 3));
console.log(minMax(1, 2, 5, -4, 3));
