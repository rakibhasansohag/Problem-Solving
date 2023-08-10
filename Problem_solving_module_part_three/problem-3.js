'use strict';
console.log('working.......');
// task : Sort an array from lowest to hightest

// point : solution 1 : with out using any built in function

const sortArray = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
};

console.log(sortArray([1, 2, 3, 4, 5, 3, 2, 3, 41, 34, 10]));

// point : solution 2 : with using built in function

const sortArray2 = (arr) => arr.sort((a, b) => a - b);

console.log(sortArray2([1, 2, 3, 4, 5, 3, 2, 3, 41, 34, 10]));

// point : solution 3 : using filter function ( remove the duplicate value )

const sortArray3 = (arr) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		let min = Math.min(...arr);

		newArr.push(min);

		arr = arr.filter((item) => item != min);

		i = -1;
	}

	return [...newArr];
};

let arr = [1, 2, 3, 4, 5, 3, 2, 3, 41, 34, 10];
console.log(arr, ': ', 'before sort');
console.log(sortArray3(arr));

console.log(arr, ': ', 'after sort');
