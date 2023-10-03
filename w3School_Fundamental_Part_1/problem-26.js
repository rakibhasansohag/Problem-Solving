'use strict';
console.log('working...');
// task: Get the n maximum elements from the provided array.

// point: solution (1 : using sort)

const maxN = (arr, n = 1) => {
	return [...arr].sort((a, b) => b - a).slice(0, n);
};

console.log(maxN([1, 2, 3]));
console.log(maxN([1, 2, 3], 2));

// point: solution (2 : using reduce)

const maxN2 = (arr, n = 1) => {
	return arr.reduce((acc, val) => {
		if (acc.length < n) {
			acc.push(val);
		} else {
			acc.sort((a, b) => b - a);
			if (acc[n - 1] < val) {
				acc.pop();
				acc.push(val);
			}
		}
		return acc;
	}, []);
};

console.log(maxN2([1, 2, 3]));
console.log(maxN2([1, 2, 3], 2));
