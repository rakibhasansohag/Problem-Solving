'use strict';
console.log('working...');
// task : Write a JavaScript program to get every element in any of the two arrays at once.

// Point : solution 1 : using Array.from and Set
const unionElements = (a, b) => Array.from(new Set([...a, ...b]));
console.log(unionElements([1, 2, 3], [4, 3, 2]));
console.log(unionElements([1, 2, 3], [1, 2, 3]));

// Point : solution 2 : using includes and for loop
const unionElements1 = (a, b) => {
	const unionArr = [];

	for (let i = 0; i < a.length; i++) {
		if (!unionArr.includes(a[i])) {
			unionArr.push(a[i]);
		}
	}

	for (let j = 0; j < b.length; j++) {
		if (!unionArr.includes(b[j])) {
			unionArr.push(b[j]);
		}
	}
	return unionArr;
};
console.log(unionElements1([1, 2, 3], [4, 3, 2]));
console.log(unionElements1([1, 2, 3], [1, 2, 3]));
