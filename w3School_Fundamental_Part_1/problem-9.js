' use strict ';
console.log('working....');

// task : Get the sum of a given array using the provided function.

// point : solution 1 using for loop

function sum(arr, n) {
	let result = 0;

	for (let i = 0; i < n; i++) {
		result += arr[i];
	}
	return result;
}

console.log(sum([2, 3, 4, 5], 3));
console.log(sum([2, 3, 4, 5], 4));

// point : solution 2 using recursion

function sum2(arr, n) {
	if (n <= 0) {
		return 0;
	} else {
		return sum(arr, n - 1) + arr[n - 1];
	}
}

console.log(sum2([2, 3, 4, 5], 3));
console.log(sum2([2, 3, 4, 5], 4));

// point : using reduce and map

function sum3(arr, n) {
	return arr
		.map((obj) => (typeof n === 'function' ? n(obj) : obj[n]))
		.reduce((acc, value) => acc + value, 0);
}

console.log(sum3([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(sum3([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));

// point : using reduce and map

function sum4(arr, n) {
	return arr.reduce((acc, value) => acc + value[n], 0);
}

console.log(sum4([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));
console.log(sum4([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));
