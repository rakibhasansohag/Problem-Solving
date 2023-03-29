'use strict';
/*Write a JS function reverseArray that takes an array and returns a reverse array.
Example 1:
Input: [ 3, 6, 5, 4, 8]
Output: [ 8, 4, 5, 6, 3 ]
Constraints:
The function cannot change the main array.
Cannot use array methods for reverse.
*/

// point 1 : make an function that takes an  array return reversed array

// point 2 : can not use build in function and without changing the main array

// task : solution 1
function reverseArray(array) {
	const reverseArr = [];
	let j = 0;
	for (let i = array.length - 1; i >= 0; j++, i--) {
		reverseArr[j] = array[i];
	}
	return reverseArr;
}
const newArr = [3, 6, 5, 4, 8];

console.log(reverseArray(newArr));

//  task solution 2
const myFunc = (array) => {
	const reverseArray = [];
	for (let i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
	return reverseArray;
};
console.log(myFunc(newArr));
