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

console.log('---------------another problem -----------------');

// task : Simplify a given absolute path for a file in Unix-style.

// todo : 1.1 : ( what is unix Style path ? )
// / unix style path is a path that starts with a forward slash / and does not have a drive letter like c: or d:.

// todo : 1.2 : ( what is absolute path ? )
/// An absolute path is defined as the specifying the location of a file or directory from the root directory(/).

//  point  : solution 1 ( using for loop and array methods (pop,push,join) )

console.time(' simplifyPath1 ');
function simplifyPath(path) {
	let result = [];
	let pathArr = path.split('/');

	for (let i = 0; i < pathArr.length; i++) {
		if (pathArr[i] === '..') {
			result.pop();
		} else if (pathArr[i] !== '.' && pathArr[i] !== '') {
			result.push(pathArr[i]);
		} else {
			continue;
		}
	}
	return '/' + result.join('/');
}

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/a/../../b/../c//.//'));
console.log(simplifyPath('/a//b////c/d//././/..'));

console.log(simplifyPath('/home/var/./www/../html//sql/'));

console.timeEnd('simplifyPath1');

console.log('---------------another problem -----------------');

// task : Sort the strings of a given array of strings in the order of increasing lengths.

//  point  : solution 1 ( using sort method )

function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length);
}

let arra = ['xyz', 'acd', 'aa', 'bb', 'zzz', '', 'a', 'b'];

console.log('original array : ', arra + '\n');
console.log(sortByLength(arra));

// point : solution 2 ( using for loop and array methods (push,sort) )

function sortByLength2(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i].length > arr[j].length) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return [...arr];
}

console.log('original array : ', arra + '\n');
console.log(sortByLength2(arra));

