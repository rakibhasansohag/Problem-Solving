'use strict';
console.log('working...');

// task : Write a JavaScript program to take any number of iterable objects or objects with a length property and return the longest one.

// Point : solution 1 ( using reduce )

const longestItem = (...values) =>
	values.reduce((a, x) => (x.length > a.length ? x : a), []);

console.log(longestItem('this', 'is', 'a', 'testcase')); // 'testcase'
console.log(longestItem(...['a', 'ab', 'abc'])); // 'abc'
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd')); // 'abcd'
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd', {})); // 'abcd'
console.log(longestItem(...['a', 'ab', 'abc'], {}, 'abcd')); // {}
console.log([1, 2, 3].length); // 3
console.log({ a: 1, b: 2 }.length); // undefined
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

// Point : solution 2 ( using sort )

console.log('------------ another solution ------------');

const longestItem1 = (...values) =>
	values.sort((a, b) => b.length - a.length)[0];

console.log(longestItem1('this', 'is', 'a', 'testcase')); // 'testcase'
console.log(longestItem1(...['a', 'ab', 'abc'])); // 'abc'
console.log(longestItem1(...['a', 'ab', 'abc'], 'abcd')); // 'abcd'
console.log(longestItem1(...['a', 'ab', 'abc'], 'abcd', {})); // 'abcd'
console.log(longestItem1(...['a', 'ab', 'abc'], {}, 'abcd')); // {}
console.log([1, 2, 3].length); // 3
console.log({ a: 1, b: 2 }.length); // undefined
console.log(longestItem1([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

// Point : solution 3 ( using for of loop )

console.log('------------ another solution ------------');

const longestItem2 = (...values) => {
	let longest = '';

	for (const value of values) {
		if (value.length > longest.length) longest = value;
	}

	return longest;
};

console.log(longestItem2('this', 'is', 'a', 'testcase')); // 'testcase'
console.log(longestItem2(...['a', 'ab', 'abc'])); // 'abc'
console.log(longestItem2(...['a', 'ab', 'abc'], 'abcd')); // 'abcd'
console.log(longestItem2(...['a', 'ab', 'abc'], 'abcd', {})); // 'abcd'
console.log(longestItem2(...['a', 'ab', 'abc'], {}, 'abcd')); // 'abcd
console.log([1, 2, 3].length); // 3
console.log({ a: 1, b: 2 }.length); // undefined
console.log(longestItem2([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

// Point : solution 4 ( using for loop )

console.log('------------ another solution ------------');

const longestItem3 = (...values) => {
	let longest = '';

	for (let i = 0; i < values.length; i++) {
		if (values[i].length > longest.length) longest = values[i];
	}
	return longest;
};

console.log(longestItem3('this', 'is', 'a', 'testcase')); // 'testcase'
console.log(longestItem3(...['a', 'ab', 'abc'])); // 'abc'
console.log(longestItem3(...['a', 'ab', 'abc'], 'abcd')); // 'abcd'
console.log(longestItem3(...['a', 'ab', 'abc'], 'abcd', {})); // 'abcd'
console.log(longestItem3(...['a', 'ab', 'abc'], {}, 'abcd')); // 'abcd
console.log([1, 2, 3].length); // 3
console.log({ a: 1, b: 2 }.length); // undefined
console.log(longestItem3([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
