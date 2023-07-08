' use strict';
console.log('working...');

// task : Compute the sum of cubes of all integer from 1 to an given integer .

// point : solution 1 : ( using for loop )

function sumOfCubes(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i * 3;
	}
	return sum;
}

console.log(sumOfCubes(3)); // 36
console.log(sumOfCubes(4)); // 100
console.log(sumOfCubes(5)); // 225

// point : solution 2 : ( using while loop )

function sumOfCubes2(n) {
	let sum = 0;
	let i = 1;

	while (i <= n) {
		sum += Math.pow(i, 3);
		i++;
	}
	return sum;
}

console.log(sumOfCubes2(3)); // 36
console.log(sumOfCubes2(4)); // 100

// point : solution 3 : ( using recursion )

function sumOfCubes3(n) {
	if (n === 1) {
		return 1;
	} else {
		return Math.pow(n, 3) + sumOfCubes3(n - 1);
	}
}

console.log(sumOfCubes3(3)); // 36
console.log(sumOfCubes3(4)); // 100

// point : solution 4 : ( using formula )

function sumOfCubes4(n) {
	return ((n * (n + 1)) / 2) ** 2;
}

console.log(sumOfCubes4(3)); // 36
console.log(sumOfCubes4(4)); // 100

// point : solution 5 : ( using reduce  by for loop  )

function sumOfCubes5(n) {
	let arr = [];

	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr.reduce((a, b) => a + b ** 3, 0);
}

console.log(sumOfCubes5(3)); // 36
console.log(sumOfCubes5(4)); // 100

// point : solution 6 : ( using reduce  by while loop  )

function sumOfCubes6(n) {
	let arr = [];
	let i = 1;

	while (i <= n) {
		arr.push(i);
		i++;
	}

	return arr.reduce((a, b) => a + b ** 3, 0);
}

console.log(sumOfCubes6(3)); // 36
console.log(sumOfCubes6(4)); // 100

console.log('----------- another problem -----------');

// task : Compute the sum of all digits that occur in a given string.

// point : solution 1 : ( using for loop )

function sumOfDigits(str) {
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= '0' && str[i] <= '9') {
			sum += Number(str[i]);
		}
	}
	return sum;
}

console.log(sumOfDigits('abcd12efg9')); // 12
console.log(sumOfDigits('w3resource')); // 3
console.log(sumOfDigits('12345')); // 15

// point : solution 2 : ( using while loop )

function sumOfDigits2(str) {
	let sum = 0;
	let i = 0;

	while (i < str.length) {
		if (str[i] >= '0' && str[i] <= '9') {
			sum += Number(str[i]);
		}
		i++;
	}
	return sum;
}

console.log(sumOfDigits2('abcd12efg9')); // 12
console.log(sumOfDigits2('w3resource')); // 3
console.log(sumOfDigits2('12345')); // 15

// point : solution 3 : ( using recursion  )

function sumOfDigits3(str) {
	if (str.length === 0) {
		return 0;
	} else if (str[0] >= '0' && str[0] <= '9') {
		return Number(str[0]) + sumOfDigits3(str.slice(1));
	} else {
		return sumOfDigits3(str.slice(1));
	}
}

console.log(sumOfDigits3('abcd12efg9')); // 12
console.log(sumOfDigits3('w3resource')); // 3
console.log(sumOfDigits3('12345')); // 15

// point : solution 4 : ( using reduce  by for loop  )

function sumOfDigits4(str) {
	let arr = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] >= '0' && str[i] <= '9') {
			arr.push(Number(str[i]));
		}
	}
	return arr.reduce((a, b) => a + b, 0);
}

console.log(sumOfDigits4('abcd12efg9')); // 12
console.log(sumOfDigits4('w3resource')); // 3
console.log(sumOfDigits4('12345')); // 15

// point : solution 5 : ( using reduce  by while loop  )

function sumOfDigits5(str) {
	let arr = [];
	let i = 0;

	while (i < str.length) {
		if (str[i] >= '0' && str[i] <= '9') [arr.push(Number(str[i]))];
		i++;
	}

	return arr.reduce((a, b) => a + b, 0);
}

console.log(sumOfDigits5('abcd12efg9')); // 12
console.log(sumOfDigits5('w3resource')); // 3
console.log(sumOfDigits5('12345')); // 15

console.log('----------- another problem -----------');

// task : Swap two halves of a given array of integers of even length.

// point : solution 1 : ( using for loop )

function swapHalves(arr) {
	let middle = arr.length / 2;

	for (let i = 0; i < middle; i++) {
		let temp = arr[i];
		arr[i] = arr[i + middle];
		arr[i + middle] = temp;
	}
	return arr;
}

console.log(swapHalves([1, 2, 3, 4, 5, 6])); // [4, 5, 6, 1, 2, 3]
console.log(swapHalves([1, 2, 3, 4, 5, 6, 7, 8])); // [5, 6, 7, 8, 1, 2, 3, 4]

// point : solution 2 : ( using while loop )

function swapHalves2(arr) {
	let middle = arr.length / 2;

	let i = 0;

	while (i < middle) {
		let temp = arr[i];
		arr[i] = arr[i + middle];
		arr[i + middle] = temp;

		i++;
	}

	return arr;
}

console.log(swapHalves2([1, 2, 3, 4, 5, 6])); // [4, 5, 6, 1, 2, 3]
console.log(swapHalves2([1, 2, 3, 4, 5, 6, 7, 8])); // [5, 6, 7, 8, 1, 2, 3, 4]

// point : solution 3 : ( using recursion  ) // not working

function swapHalves3(arr) {
	let middle = Math.floor(arr.length / 2);

	if (arr.length === 0) {
		return [];
	} else if (arr.length === 1) {
		return arr;
	} else {
		let temp = arr[0];
		arr[0] = arr[middle];
		arr[middle] = temp;
	}

	return arr.slice(middle).concat(swapHalves3(arr.slice(0, middle)));
}

console.log(swapHalves3([1, 2, 3, 4, 5, 6])); // [4, 5, 6, 1, 2, 3]
console.log(swapHalves3([1, 2, 3, 4, 5, 6, 7, 8])); // [5, 6, 7, 8, 1, 2, 3, 4]

console.log('----------- another problem -----------');

// task : Change the capitalization of all letters in a given string.

// point : solution 1 : ( using for loop )

function changeCapitalization(str) {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			newStr += str[i].toLowerCase();
		} else {
			newStr += str[i].toUpperCase();
		}
	}
	return newStr;
}

console.log(changeCapitalization('W3resource')); // w3RESOURCE
console.log(changeCapitalization('Germany')); // gERMANY
console.log(changeCapitalization('PhP')); // php

// point : solution 2 : ( using while loop )

function changeCapitalization2(str) {
	let newStr = '';
	let i = 0;

	while (i < str.length) {
		if (str[i] === str[i].toUpperCase()) {
			newStr += str[i].toLowerCase();
		} else {
			newStr += str[i].toUpperCase();
		}
		i++;
	}
	return newStr;
}

console.log(changeCapitalization2('W3resource')); // w3RESOURCE
console.log(changeCapitalization2('Germany')); // gERMANY

// point : solution 3 : ( using recursion  )

function changeCapitalization3(str) {
	if (str.length === 0) {
		return '';
	} else if (str[0] === str[0].toUpperCase()) {
		return str[0].toLowerCase() + changeCapitalization3(str.slice(1));
	} else {
		return str[0].toUpperCase() + changeCapitalization3(str.slice(1));
	}
}

console.log(changeCapitalization3('W3resource')); // w3RESOURCE
console.log(changeCapitalization3('Germany')); // gERMANY

console.log('----------- another problem -----------');

// task : Swap pairs of adjacent digits of a given integer of even length.

// point : solution 1 : ( using for loop )

function swapPairs(num) {
	let str = num.toString();
	let newStr = '';

	for (let i = 0; i < str.length; i += 2) {
		newStr += str[i + 1] + str[i];
	}
	return Number(newStr);
}

console.log(swapPairs(15)); // 214365
console.log(swapPairs(12345678)); // 21436587

// point : solution 2 : ( using while loop )

function swapPairs2(num) {
	let str = num.toString();
	let newStr = '';
	let i = 0;

	while (i < str.length) {
		newStr += str[i + 1] + str[i];
		i += 2;
	}
	return Number(newStr);
}

console.log(swapPairs2(15)); // 214365
console.log(swapPairs2(12345678)); // 21436587

// point : solution 3 : ( using recursion  )

function swapPairs3(num) {
	if (num.toString().length === 0) {
		return '';
	} else {
		return (
			num.toString()[1] +
			num.toString()[0] +
			swapPairs3(num.toString().slice(2))
		);
	}
}

console.log(swapPairs3(15)); // 51
console.log(swapPairs3(12345678)); // 21436587
