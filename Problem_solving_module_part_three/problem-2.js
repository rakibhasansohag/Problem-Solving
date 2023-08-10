'use strict';
console.log('working.......');
// task : Create  a function that reverse an array .

// point : solution 1 : with out using any built in function

const reverseArray = (arr) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr[i] = arr[arr.length - 1 - i];
	}

	return newArr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C', 'D', 'E']));

// point : solution 2 : with using built in function

const reverseArray2 = (arr) => {
	return arr.reverse();
};

console.log(reverseArray2([1, 2, 3, 4, 5]));
console.log(reverseArray2(['A', 'B', 'C', 'D', 'E']));

// point : solution 3 : using array sort function

const reverseArray3 = (arr) => {
	return arr.sort((a, b) => b - a);
};

console.log(reverseArray3([1, 2, 3, 4, 5]));

//
