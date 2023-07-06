'use strict ';
console.log('working....');

// task : Find the number of elements which presents in both of the given arrays.

//  point  : solution 1 ( using nested for loop )

console.time(' FindCommonELements1 ');
function findCommonElements(arr1, arr2) {
	let result = 0;

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				result++;
			}
		}
	}
	return result;
}

console.log(findCommonElements([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(findCommonElements([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));

console.timeEnd('FindCommonELements1');

//  point  : solution 2 ( using filter with includes method )

console.time(' FindCommonELements2 ');
function findCommonElements2(arr1, arr2) {
	let result = arr1.filter((item) => arr2.includes(item));
	return result.length;
}

console.log(findCommonElements2([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(findCommonElements2([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));

console.timeEnd('findCommonELements2');

//  point  : solution 3 ( using filter with indexOf method )

console.time(' FindCommonELements3 ');
function findCommonElements3(arr1, arr2) {
	let result = arr1.filter((item) => arr2.indexOf(item) !== -1);
	return result.length;
}

console.log(findCommonElements3([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(findCommonElements3([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));

console.timeEnd('findCommonELements3');
