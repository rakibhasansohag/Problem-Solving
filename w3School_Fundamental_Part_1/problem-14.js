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
