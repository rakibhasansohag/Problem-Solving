'use strict';
console.log('working...');

// task  : Get the largest even number from an array of integers

// point : solution 1 : using Math.max() , filter and spread operator
console.time('solution 1 largest even number');
const largestEven = (arr) => {
	const even = arr.filter((num) => num % 2 === 0);
	return Math.max(...even);
};

console.log(largestEven([1, 2, 3, 10, 4, 7, 0])); /// 10
console.log(largestEven([1, 3, 3, 10, 4, 7, 33, 34, 35, 0])); /// 34

console.timeEnd('solution 1 largest even number');

// point: solution 2 ( using sort and for loop )

console.time('solution 2 largest even number');

const largestEven2 = (arr) => {
	arr.sort((a, b) => b - a);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			return arr[i];
		}
	}
};

console.log(largestEven2([1, 2, 3, 10, 4, 7, 0])); /// 10
console.log(largestEven2([1, 3, 3, 10, 4, 7, 33, 34, 35, 0])); /// 34

console.timeEnd('solution 2 largest even number');

// point: solution 3 ( using reduce :) )

console.time('solution 3 largest even number');

const largestEven3 = (arr) => {
	return arr.reduce((acc, cur) => {
		if (cur % 2 === 0 && cur > acc) {
			acc = cur;
		}
		return acc;
	}, 0);
};

console.log(largestEven3([1, 2, 3, 10, 4, 7, 0])); /// 10
console.log(largestEven3([1, 3, 3, 10, 4, 7, 33, 34, 35, 0])); /// 34

console.timeEnd('solution 3 largest even number');
