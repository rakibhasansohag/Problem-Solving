'use strict';
console.log('working....');

// task : Initialize a two dimension array of given width and height and value.

// point 1 solution : using for loop

const twoDimensionArray = (width, height, value) => {
	let arr = [];
	for (let i = 0; i < height; i++) {
		arr[i] = [];
		for (let j = 0; j < width; j++) {
			arr[i][j] = value;
		}
	}
	return arr;
};

console.log(twoDimensionArray(2, 2, 0));
console.log(twoDimensionArray(3, 3, 3));
console.log(twoDimensionArray(3, 3, 'x'));

// point 2 solution : using map

const twoDimensionArray2 = (width, height, value) => {
	let arr = new Array(height).fill(0);

	return arr.map(() => new Array(width).fill(value));
};

console.log(twoDimensionArray2(2, 2, 0));
console.log(twoDimensionArray2(3, 3, 3));
console.log(twoDimensionArray2(3, 3, 'x'));

// point 3 solution : using for  of loop

const twoDimensionArray3 = (width, height, value) => {
	let arr = [];

	for (let i of Array(height).keys()) {
		arr.push(Array(width).fill(value));
	}

	return arr;
};

console.log(twoDimensionArray3(2, 2, 0));
console.log(twoDimensionArray3(3, 3, 3));
console.log(twoDimensionArray3(3, 3, 'x'));

console.log('------------------ another problem ------------------');

// task : Initialize an array containing the numbers in the specified range where start and end are inclusive with their common difference step.

// point 1 solution : using for loop

const initializeArrayWithRange = (end, start = 0, step = 1) => {
	let arr = [];

	for (let i = start; i <= end; i += step) {
		arr.push(i);
	}
	return arr;
};

console.log(initializeArrayWithRange(5));
console.log(initializeArrayWithRange(8, 3));
console.log(initializeArrayWithRange(6, 0, 2));

// point 2 solution : using while loop

const initializeArrayWithRange2 = (end, start = 0, step = 1) => {
	let arr = [];

	while (start <= end) {
		arr.push(start);
		start += step;
	}
	return arr;
};

console.log(initializeArrayWithRange2(5));
console.log(initializeArrayWithRange2(8, 3));
console.log(initializeArrayWithRange2(6, 0, 2));

// point 3 solution : using recursion

const initializeArrayWithRange3 = (end, start = 0, step = 1) => {
	if (start > end) return [];

	return [start, ...initializeArrayWithRange3(end, start + step, step)];
};

console.log(initializeArrayWithRange3(5));
console.log(initializeArrayWithRange3(8, 3));
console.log(initializeArrayWithRange3(6, 0, 2));

// point 4 solution : using Array.from()

const initializeArrayWithRange4 = (end, start = 0, step = 1) => {
	return Array.from(
		{ length: Math.ceil((end - start + 1) / step) },
		(v, i) => i * step + start,
	);
};

console.log(initializeArrayWithRange4(5));
console.log(initializeArrayWithRange4(8, 3));
console.log(initializeArrayWithRange4(6, 0, 2));

console.log('------------------ another problem ------------------');

// task : Join all given URL segments together, then normalizes the resulting URL.

// point 1 solution : using reduce()

const joinURLSegments = (...args) => {
	return args.reduce((acc, cur) => {
		return acc.replace(/\/+$/, '') + '/' + cur.replace(/^\/+/, '');
	});
};

console.log(
	joinURLSegments('http://', 'www.google.com', '/a', '/b/cd', '?foo=123'),
);

// point 2 solution : using Array.join() and String.replace()

const joinURLSegments2 = (...args) => {
	return args.join('/').replace(/[\/]+/g, '/');
};

console.log(
	joinURLSegments2('http://', 'www.google.com', '/a', '/b/cd', '?foo=123'),
);

// point 3 solution : solving with URL object

const joinURLSegments3 = (...args) => {
	return new URL(args.join('/')).href;
};

console.log(
	joinURLSegments3('http://', 'www.google.com', '/a', '/b/cd', '?foo=123'),
);

console.log('------------------ another problem ------------------');

// task : Check whether all elements in a given array are equal or not.

// point 1 solution : using every()

const allEqual = (arr) => {
	return arr.every((val) => val === arr[0]);
};

console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([1, 1, 1, 1, 1, 1]));

// point 2 solution : using Set and size

const allEqual2 = (arr) => {
	return new Set(arr).size === 1;
};

console.log(allEqual2([1, 2, 3, 4, 5, 6]));
console.log(allEqual2([1, 1, 1, 1, 1, 1]));

// point 3 solution : using Array.every() and Array.slice()

const allEqual3 = (arr) => {
	return arr.every((val, i, arr) => val === arr[0]);
};

console.log(allEqual3([1, 2, 3, 4, 5, 6]));
console.log(allEqual3([1, 1, 1, 1, 1, 1]));

console.log('------------------ another problem ------------------');
