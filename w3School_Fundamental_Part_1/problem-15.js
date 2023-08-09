'use strict';
console.log('working....');

// task : Check whether all elements in a given array are equal or not.

// point  1 solution : using every() method

const checkEqual = (arr) => {
	return arr.every((val, i, arr) => val === arr[0]);
};

console.log(checkEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(checkEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true

// point : solution 2 : using for loop

const checkEqual2 = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[0]) {
			return false;
		}
	}
	return true;
};

console.log(checkEqual2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(checkEqual2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true

// point : solution 3 : using reduce() method

const checkEqual3 = (arr) => {
	return arr.reduce((acc, val) => {
		if (val !== acc) {
			return false;
		}
		return acc;
	});
};

console.log(checkEqual3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(checkEqual3([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true

// point : solution 4 : using filter() method

const checkEqual4 = (arr) => {
	return arr.filter((val) => val === arr[0]).length === arr.length;
};

console.log(checkEqual4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(checkEqual4([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true

console.log('------------------ another problem ------------------');

// task : Compute the average of an array, after mapping each element to a value using the provided function.

// point : solution 1 : using reduce() method

const average = (arr, fn) => {
	return (
		arr
			.map(typeof fn === 'function' ? fn : (val) => val[fn])
			.reduce((acc, val) => acc + val) / arr.length
	);
};

// console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // NaN
console.log(average([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], 'a')); // /50
console.log(average([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], (o) => o.a)); // / 50
console.log(average([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a')); /// 5

// point : solution 2 : using reduce() method

const average2 = (arr, fn) => {
	return (
		arr.reduce(
			(acc, val) => acc + (typeof fn === 'function' ? fn(val) : val[fn]),
			0,
		) / arr.length
	);
};

console.log('..................');
console.log(average2([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], 'a')); // /50
console.log(average2([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], (o) => o.a)); // / 50
console.log(average2([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a')); /// 5

// point : solution 3 : using for loop

const average3 = (arr, fn) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += typeof fn === 'function' ? fn(arr[i]) : arr[i][fn];
	}
	return sum / arr.length;
};

console.log('..................');
console.log(average3([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], 'a')); // /50
console.log(average3([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], (o) => o.a)); // / 50
console.log(average3([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a')); /// 5

console.log('------------------ another problem ------------------');
