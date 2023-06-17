'use strict';
console.log('working...');

// task :Check whether the first and last elements are equal of a given array of integers length 3

// point : solution 1

function checkFirstLast(arr) {
	if (arr.length < 3) {
		return false;
	} else {
		return arr[0] === arr[arr.length - 1];
	}
}

console.log(checkFirstLast([1, 2, 3]));
console.log(checkFirstLast([1, 2, 1]));
console.log(checkFirstLast([1, 2]));

// task : Reverse the elements of a given array of integers length 3

// point : solution 1

function reverseArray(arr) {
	return [arr[2], arr[1], arr[0]];
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([5, 11, 9]));
console.log(reverseArray([7, 0, 0]));

// point : solution 2

function reverseArray2(arr) {
	let first = arr[0];
	let second = arr[1];

	let third = arr[2];

	arr[0] = third;
	arr[1] = second;
	arr[2] = second;

	return arr;
}

console.log(reverseArray2([1, 2, 3]));
console.log(reverseArray2([5, 11, 9]));
console.log(reverseArray2([7, 0, 0]));

// point : solution 3 : using for loop

function reverseArray3(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		let temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;

		return arr;
	}
}
console.log('------------solution--------------');
console.log(reverseArray3([1, 2, 3]));
console.log(reverseArray3([5, 11, 9]));
console.log(reverseArray3([7, 0, 0]));

// task : Find the larger value between the first or last and set all the other elements with that value.

// point : solution 1

function findMaxValue(arr) {
	let maxValue = arr[0] > arr[2] ? arr[0] : arr[2];

	arr[0] = maxValue;
	arr[1] = maxValue;
	arr[2] = maxValue;

	return arr;
}
console.log('------------solution( max Value 1 ) --------------');
console.log(findMaxValue([1, 2, 3]));
console.log(findMaxValue([5, 11, 9]));
console.log(findMaxValue([7, 0, 0]));

// task : Create a new array taking the middle elements of the two arrays of integer and each length 3

// point : solution 1

function middleElements(arr1, arr2) {
	let newArr = [];

	newArr.push(arr1[1], arr2[1]);
	return [...newArr];
}

console.log('------------solution( middle Elements 1 ) --------------');
console.log(middleElements([1, 2, 3], [1, 5, 6]));
console.log(middleElements([3, 3, 3], [2, 8, 0]));
console.log(middleElements([4, 2, 7], [2, 8, 3]));

// point : solution 2

function middleElements2(arr1, arr2) {
	let newArr = arr1.slice(1, 2).concat(arr2.slice(1, 2));

	return [...newArr];
}

console.log('------------solution( middle Elements 2 ) --------------');
console.log(middleElements2([1, 2, 3], [1, 5, 6]));
console.log(middleElements2([3, 3, 3], [2, 8, 0]));
console.log(middleElements2([4, 2, 7], [2, 8, 3]));

// task : Create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1

// point : solution 1

function firstLast(arr) {
	let newArr = arr.slice(0, 1).concat(arr.slice(arr.length - 1, arr.length));

	return [...newArr];
}

console.log('------------solution( first and last Elements 1 ) --------------');
console.log(firstLast([1, 2, 3]));
console.log(firstLast([1, 2, 3, 4]));
console.log(firstLast([1, 2, 3, 4, 5, 6]));

// point : solution 2

function firstLast2(arr) {
	let newArr = [];

	newArr.push(arr[0], arr[arr.length - 1]);

	return [...newArr];
}

console.log('------------solution( first and last Elements 2 ) --------------');
console.log(firstLast2([1, 2, 3]));
console.log(firstLast2([1, 2, 3, 4]));
console.log(firstLast2([1, 2, 3, 4, 5, 6]));
