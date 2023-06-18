'use strict ';
console.log('working...');

// task : Test whether an array of integers of length 2 contains 1 or a 3

//  point : solution 1;

function checkArray(arr) {
	return arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1;
}

console.log(checkArray([1, 2]));
console.log(checkArray([3, 2]));
console.log(checkArray([7, 5]));

// point : solution 2 ( includes method)

function checkArray2(arr) {
	if (arr.includes(1) || arr.includes(3)) {
		return true;
	} else {
		return false;
	}
}

console.log(checkArray2([1, 2]));
console.log(checkArray2([3, 2]));
console.log(checkArray2([7, 5]));

console.log('--------------------another problem-------------');

// task : Test whether an array of integers of length 2 does not contain 1 or a 3

// point : solution 1;

function checkArray3(arr) {
	if (arr.indexOf(1) === -1 && arr.indexOf(3) === -1) {
		return true;
	} else {
		return false;
	}
}

console.log(checkArray3([1, 2]));
console.log(checkArray3([3, 2]));
console.log(checkArray3([7, 5]));

// point: solution 2 (includes method)

function checkArray4(arr) {
	if (arr.includes(1) || arr.includes(3)) {
		return false;
	} else {
		return true;
	}
}

console.log(checkArray4([1, 2]));
console.log(checkArray4([3, 2]));
console.log(checkArray4([7, 5]));

console.log('--------------------another problem  --------------');

// task  : Test whether a given array of integers contains 30 or 40 twice . e.g:: The array length should be 0, 1, or 2.

// point : solution 1;

function checkArray5(arr) {
	// bug code
	let a = arr[0];
	let b = arr[1];

	if ((a === 30 && b === 30) || (a === 40 && b === 40)) {
		return true;
	} else {
		return false;
	}
}

console.log(checkArray5([30, 30]));
console.log(checkArray5([40, 40]));
console.log(checkArray5([20, 20]));
console.log(checkArray5([30]));

console.log('--------------------another Solution  --------------');

// point : solution 2;

function twice3040(arra1) {
	let a = arra1[0],
		b = arra1[1];
	return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));
