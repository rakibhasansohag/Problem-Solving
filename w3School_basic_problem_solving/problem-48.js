'use strict';
console.log('working...');

//  task : Check whether there is at least one element which occurs in two given sorted arrays of integers.

// point: solution 1 : ( for loop )

function checkElement(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) != -1) {
			return true;
		}
	}

	return false;
}

console.log(checkElement([1, 2, 3], [3, 4, 5]));
console.log(checkElement([1, 2, 3], [4, 5, 6]));

// point: solution 2 : ( for loop )

function checkElement2(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) !== -1) return true;
	}

	return false;
}

console.log(checkElement2([1, 2, 3], [3, 4, 5]));
console.log(checkElement2([1, 2, 3], [4, 5, 6]));

console.log('-------------- another problem -----------------');

// task : Check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

// error  : what is adjacent positions ?

/// nearest in space or position immediately adjoining without intervening space

// point: solution 1 : ( for loop )

function checkString(str) {
	let isLowercase = str[0] === str[0].toLowerCase();

	for (let i = 1; i < str.length; i++) {
		if (
			(isLowercase && str[i] !== str[i].toUpperCase()) ||
			(!isLowercase && str[i] !== str[i].toLowerCase())
		) {
			return false;
		}
		isLowercase = !isLowercase;
	}

	return true;
}

console.log(checkString('xYr'));
console.log(checkString('XXyx'));
console.log(checkString('xYrX'));

// point: solution 2 : ( w3school way )

function checkString2(str) {
	const isLowerCase = (symbol) => {
		if ('a' <= symbol && symbol <= 'z') {
			return true;
		}
		return false;
	};

	const isUpperCase = (symbol) => {
		if ('A' <= symbol && symbol <= 'Z') {
			return true;
		}
		return false;
	};

	const isFirstCharLower = isLowerCase(str[0]);
	const isFirstCharUpper = isUpperCase(str[0]);

	if (!(isFirstCharLower || isFirstCharUpper)) {
		return false;
	}

	for (let i = 1; i < str.length; i++) {
		if (i % 2) {
			if (
				isLowerCase(str[i]) === isFirstCharLower ||
				isUpperCase(str[i]) === isFirstCharUpper
			) {
				return false;
			}
		} else {
			if (
				isLowerCase(str[i]) !== isFirstCharLower ||
				isUpperCase(str[i]) !== isFirstCharUpper
			) {
				return false;
			}
		}
	}

	return true;
}

console.log('w3School way solution : ');

console.log(checkString2('xYr'));
console.log(checkString2('XXyx'));
console.log(checkString2('xYrX'));

// task : Find the number of inversions of a specified array of integers.
// / what is inversions ?
// point 1 : a reversal of position, order, form, or relationship: such as : a change in the order of two elements in a mathematical expression such that the product remains unchanged.

// point: solution 1 : ( nested for loop )

function findInversions(arr) {
	let character = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				character++;
			}
		}
	}
	return character;
}

console.log('--------------another problem-----------------');

console.log(findInversions([0, 3, 2, 5, 9]));
console.log(findInversions([1, 5, 4, 3]));
console.log(findInversions([10, 30, 20, -10]));

// point: solution 2 : ( for loop )

function findInversions2(arr) {
	let character = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				character++;
			}
		}
	}

	return character;
}

console.log(findInversions2([0, 3, 2, 5, 9]));
console.log(findInversions2([1, 5, 4, 3]));
console.log(findInversions2([10, 30, 20, -10]));
