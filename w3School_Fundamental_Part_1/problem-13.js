'use strict';
console.log('working...');

// task : Convert an integer to a suffixed string, adding am or pm based on its value.

// point solution 1  - using ternary operator

const convertTime = (num) => {
	return num === 0 || num === 24
		? 12 + 'am'
		: num === 12
		? 12 + 'pm'
		: num < 12
		? (num % 12) + 'am'
		: (num % 12) + 'pm';
};

console.log(convertTime(0));
console.log(convertTime(11));
console.log(convertTime(13));
console.log(convertTime(25));

// point solution 2  - using if else statement

const convertTime2 = (num) => {
	if (num === 0 || num === 24) {
		return 12 + 'am';
	} else if (num === 12) {
		return 12 + 'pm';
	} else if (num < 12) {
		return (num % 12) + 'am ';
	} else if (num > 12) {
		return (num % 12) + 'pm';
	} else {
		return 'invalid input :(';
	}
};

console.log(convertTime2(0));
console.log(convertTime2(11));
console.log(convertTime2(13));
console.log(convertTime2(25));

// point solution 3  - using switch statement

const convertTime3 = (num) => {
	switch (num) {
		case 0:
		case 24:
			return 12 + 'am';
		case 12:
			return 12 + 'pm';
		default:
			return num < 12 ? (num % 12) + 'am' : (num % 12) + 'pm';
	}
};
console.log('...............');
console.log(convertTime3(0));
console.log(convertTime3(11));
console.log(convertTime3(13));
console.log(convertTime3(25));

console.log('------------------ another problem ------------------');

// task : Get an object containing the parameters of the current URL.

// point solution 1  - using URLSearchParams() and Array.from() and Array.reduce()

const getURLParameters = (url) => {
	return Array.from(new URLSearchParams(url)).reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {});
};

console.log(getURLParameters('http://url.com/page?name=Adam&surname=Smith'));
console.log(getURLParameters('google.com'));
console.log(getURLParameters('https://www.w3resource.com'));

// point solution 2 - using match() and Array.reduce()

const getURLParameters2 = (url) => {
	return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((acc, cur) => {
		const [key, value] = cur.split('=');
		acc[key] = value;
		return acc;
	}, {});
};

console.log(getURLParameters2('http://url.com/page?name=Adam&surname=Smith'));
console.log(getURLParameters2('google.com'));
console.log(getURLParameters2('https://www.w3resource.com'));

console.log('------------------ another problem ------------------');

// task : Group the elements of a given array based on the given function.

// point solution 1  - using Array.reduce() and Array.push()

const groupBy = (arr, fn) => {
	return arr.reduce((acc, cur) => {
		const key = fn(cur);
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(cur);
		return acc;
	}, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.sqrt));
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(['one', 'two', 'three'], (i) => i.length));

// point solution 2  - using Array.reduce() and Array.concat()

const groupBy2 = (arr, fn) => {
	return arr.reduce((acc, cur) => {
		const key = fn(cur);
		acc[key] = acc[key] || [];
		return (acc[key] = acc[key].concat(cur));
	}, {});
};

console.log(groupBy2([6.1, 4.2, 6.3], Math.sqrt));
console.log(groupBy2([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy2(['one', 'two', 'three'], (i) => i.length));

// point solution 3  - using w3resource solution

const groupBy3 = (arr, fn) =>
	arr
		.map(typeof fn === 'function' ? fn : (val) => val[fn])
		.reduce((acc, val, i) => {
			acc[val] = (acc[val] || []).concat(arr[i]);
			return acc;
		}, {});

console.log(groupBy3([6.1, 4.2, 6.3], Math.sqrt));
console.log(groupBy3([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy3(['one', 'two', 'three'], (i) => i.length));
