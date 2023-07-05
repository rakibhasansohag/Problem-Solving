'use strict';
console.log('working...');

// task : Find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number in the array.

// point: solution 1 ( using for loop )

console.time('roundNumber1');
function roundNumber(arr) {
	let result = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 10 === 0) {
			result = i;
		}
	}
	return result;
}

console.log(roundNumber([1, 22, 30, 54, 56])); /// 2
console.log(roundNumber([1, 22, 32, 54, 56])); /// 0
console.log(roundNumber([1, 22, 32, 54, 56, 60])); /// 5
console.timeEnd('roundNumber1');

// point: solution 2 ( using findIndex with  ternary operator )

console.time('roundNumber2');

function roundNumber2(arr) {
	const result = arr.findIndex((item) => item % 10 === 0);
	return result === -1 ? 0 : result;
}

console.log(roundNumber2([1, 22, 30, 54, 56])); /// 2
console.log(roundNumber2([1, 22, 32, 54, 56])); /// 0
console.log(roundNumber2([1, 22, 32, 54, 56, 60])); /// 5
console.timeEnd('roundNumber2');

// point: solution 3 ( using for of loop )

console.time('roundNumber3');

function roundNumber3(arr) {
	let result = 0;

	for (const [index, value] of arr.entries()) {
		if (value % 10 === 0) {
			result = index;
		}
	}
	return result;
}

console.log(roundNumber3([1, 22, 30, 54, 56])); /// 2
console.log(roundNumber3([1, 22, 32, 54, 56])); /// 0
console.log(roundNumber3([1, 22, 32, 54, 56, 60])); /// 5
console.timeEnd('roundNumber3');

// point: solution 4 ( using forEach loop )

console.time('roundNumber4');

function roundNumber4(arr) {
	let result = 0;

	arr.forEach((item, value) => {
		if (item % 10 === 0) {
			result = value;
		}
	});
	return result;
}

console.log(roundNumber4([1, 22, 30, 54, 56])); /// 2
console.log(roundNumber4([1, 22, 32, 54, 56])); /// 0
console.log(roundNumber4([1, 22, 32, 54, 56, 60])); /// 5
console.timeEnd('roundNumber4');

// point: solution 5 ( using filter )

console.time('roundNumber5');

function roundNumber5(arr) {
	let result = 0;

	arr.filter((item, index) => {
		if (item % 10 === 0) {
			result = index;
		}
	});
	return result;
}

console.log(roundNumber5([1, 22, 30, 54, 56])); /// 2
console.log(roundNumber5([1, 22, 32, 54, 56])); /// 0
console.log(roundNumber5([1, 22, 32, 54, 56, 60])); /// 5
console.timeEnd('roundNumber5');

// point: solution 6 ( using map )

console.time('roundNumber6');

function roundNumber6(arr) {
	let result = 0;

	arr.map((item, index) => {
		if (item % 10 === 0) {
			result = index;
		}
	});
	return result;
}

console.log(roundNumber6([1, 22, 30, 54, 56])); /// 2
console.log(roundNumber6([1, 22, 32, 54, 56])); /// 0
console.log(roundNumber6([1, 22, 32, 54, 56, 60])); /// 5
console.timeEnd('roundNumber6');

// point: solution 7 ( using reduce )

console.time('roundNumber7');

function roundNumber7(arr) {
	return arr.reduce((acc, item, index) => {
		if (item % 10 === 0) {
			acc = index;
		}
		return acc;
	}, 0);
}

console.log(roundNumber7([1, 22, 30, 54, 56])); /// 2
console.log(roundNumber7([1, 22, 32, 54, 56])); /// 0
console.log(roundNumber7([1, 22, 32, 54, 56, 60])); /// 5
console.timeEnd('roundNumber7');

console.log('---------------------- another problem ----------------------');

// task : Check whether all the digits in a given number are the same or not.

// point: solution 1 ( using for loop );

console.time('sameNumber1');

function sameNumber(num) {
	let result = true;
	const str = num.toString();

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[0]) {
			result = false;
		}
	}

	return result;
}

console.log(sameNumber(222222)); /// true
console.log(sameNumber(222221)); /// false
console.log(sameNumber(111111)); /// true

console.timeEnd('sameNumber1');

// point: solution 2 ( using for of loop );

console.time('sameNumber2');

function sameNumber2(num) {
	const str = num.toString();

	for (const item of str) {
		if (item !== str[0]) {
			return false;
		}
	}
	return true;
}

console.log(sameNumber2(222222)); /// true
console.log(sameNumber2(222221)); /// false
console.log(sameNumber2(111111)); /// true
console.timeEnd('sameNumber2');

// point: solution 3 ( using while with Math.floor );

console.time('sameNumber3');

function sameNumber3(num) {
	let first = num % 10;

	while (num) {
		if (num % 10 !== first) {
			return false;
		}
		num = Math.floor(num / 10);
	}
	return true;
}

console.log(sameNumber3(222222)); /// true
console.log(sameNumber3(222221)); /// false
console.log(sameNumber3(111111)); /// true

console.timeEnd('sameNumber3');

// point: solution 4 ( using forEach );

console.time('sameNumber4');

function sameNumber4(num) {
	let result = true;
	const str = num.toString();

	str.split('').forEach((item) => {
		if (item !== str[0]) {
			result = false;
		}
	});
	return result;
}

console.log(sameNumber4(222222)); /// true
console.log(sameNumber4(222221)); /// false
console.log(sameNumber4(111111)); /// true

console.timeEnd('sameNumber4');

// point: solution 5 ( using every );

console.time('sameNumber5');

function sameNumber5(num) {
	const str = num.toString();

	const result = str.split('').every((item) => item === str[0]);
	return result;
}

console.log(sameNumber5(222222)); /// true
console.log(sameNumber5(222221)); /// false
console.log(sameNumber5(111111)); /// true

console.timeEnd('sameNumber5');
