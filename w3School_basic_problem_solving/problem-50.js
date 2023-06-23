'use strict';
console.log('working...');

// task : Divide an integer by another integer as long as the result is an integer and return the result

// point: solution 1 : ( while loop  )

function divideDigit(num1, num2) {
	if (num2 === 1) {
		return num1;
	} else {
		while (num1 % num2 === 0) {
			num1 /= num2;
		}

		return num1;
	}
}
console.log(divideDigit(-12, 2));
console.log(divideDigit(13, 2));
console.log(divideDigit(13, 1));

// task  :  Find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one .
console.log('---------------- another problem ----------------');
// point : solution 1 : ( nested for loop )

function findPairs(arr) {
	let result = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
				result++;
			}
		}
	}

	return result;
}

console.log(findPairs([1, 3, 2])); /// 2 (1,3) (2,1)
console.log(findPairs([2, 4, 6])); /// 2 (2,4) (2,6)
console.log(findPairs([2, 4, 16])); /// 3 (2,4) (2,16) (4,16)

// point : solution 2 : ( for  loop and reduce  if condition )

function findPairs2(arr) {
	return arr.reduce((acc, cur, i) => {
		for (let j = i + 1; j < arr.length; j++) {
			if (cur % arr[j] === 0 || arr[j] % cur === 0) {
				acc++;
			}
		}
		return acc;
	}, 0);
}

console.log(findPairs2([1, 3, 2])); /// 2 (1,3) (2,1)
console.log(findPairs2([2, 4, 6])); /// 2 (2,4) (2,6)
console.log(findPairs2([2, 4, 16])); /// 3 (2,4) (2,16) (4,16)

// point : solution 3 : ( for  loop and filter/reduce   if condition )

function findPairs3(arr) {
	return arr.reduce((acc, cur, i) => {
		return (
			acc +
			arr.filter((el, j) => {
				return (cur % el === 0 || el % cur === 0) && i < j;
			}).length
		);
	}, 0);
}

console.log(findPairs3([1, 3, 2])); /// 2 (1,3) (2,1)
console.log(findPairs3([2, 4, 6])); /// 2 (2,4) (2,6)
console.log(findPairs3([2, 4, 16])); /// 3 (2,4) (2,16) (4,16)

console.log('---------------- another problem ----------------');

// task : Create the dot products of two given 3D vectors.

// point : solution 1 : ( for loop and reduce )

function dotProduct(arr1, arr2) {
	return arr1.reduce((acc, cur, i) => {
		return acc + cur * arr2[i];
	}, 0);
}

console.log(dotProduct([1, 2, 3], [1, 2, 3])); /// 14
console.log(dotProduct([2, 4, 6], [2, 4, 6])); /// 56
console.log(dotProduct([1, 1, 1], [0, 1, -1])); /// 0

// point : solution 2 : ( for loop w3School method )

function dotProduct2(arr1, arr2) {
	let result = 0;

	for (let i = 0; i < 3; i++) {
		result += arr1[i] * arr2[i];
	}
	return result;
}

console.log(dotProduct2([1, 2, 3], [1, 2, 3])); /// 14
console.log(dotProduct2([2, 4, 6], [2, 4, 6])); /// 56
console.log(dotProduct2([1, 1, 1], [0, 1, -1])); /// 0
