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
