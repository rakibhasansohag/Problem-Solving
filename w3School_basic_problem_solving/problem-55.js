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

console.log('---------------------- another problems ----------------------');
// task : Reverse the order of the bits in a given integer

// point : solution 1 ( using toString(2) and parseInt(2) while loop )

console.time('solution 1 reverse the order of the bits in a given integer');

const reverseBits = (num) => {
	let binary = num.toString(2).split('');

	while (binary.length < 8) {
		binary.unshift('0');
	}

	return parseInt(binary.reverse().join(''), 2);
};

console.log(reverseBits(14)); /// 112
console.log(reverseBits(56)); /// 28
console.log(reverseBits(234)); /// 87

console.timeEnd('solution 1 reverse the order of the bits in a given integer');

// point : solution 2 ( using toString(2) and parseInt(2) with for loop )

console.time('solution 2 reverse the order of the bits in a given integer');

const reverseBits2 = (num) => {
	let binary = num.toString(2).split('');

	for (let i = 0; i < 8 - binary.length; i++) {
		binary.unshift('0');
	}

	return parseInt(binary.reverse().join(''), 2);
};

console.log(reverseBits2(14)); /// 112
console.log(reverseBits2(56)); /// 28
console.log(reverseBits2(234)); /// 87

console.timeEnd('solution 2 reverse the order of the bits in a given integer');

// point : solution 3 ( using toString(2) and parseInt(2) without  for loop or while loop )

console.time('solution 3 reverse the order of the bits in a given integer');

const reverseBits3 = (num) => {
	let binary = num.toString(2).split('').reverse().join('');

	return parseInt(binary, 2);
};

console.log(reverseBits3(14)); ///
console.log(reverseBits3(56)); ///
console.log(reverseBits3(234)); ///

console.timeEnd('solution 3 reverse the order of the bits in a given integer');
