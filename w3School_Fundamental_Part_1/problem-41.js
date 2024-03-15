'use strict';
console.log('working...');

// task : Write a JavaScript program to create a specified currency format from a given number.

// Point: using Int.numberFormat
const toCurrencies = (n, cur, languageFormat = undefined) => {
	return Intl.NumberFormat(languageFormat, {
		style: 'currency',
		currency: cur,
	}).format(n);
};

console.log(toCurrencies(123456.789, 'EUR')); // currency: Euro | currencyLangFormat: Local
console.log(toCurrencies(123456.789, 'USD', 'en-us')); // currency: US Dollar | currencyLangFormat: English (United States)
console.log(toCurrencies(123456.789, 'USD', 'fa')); //currency: US Dollar | currencyLangFormat: Farsi
console.log(toCurrencies(322342436423.2435, 'JPY')); //currency: Japanese Yen | currencyLangFormat: Local
console.log(toCurrencies(322342436423.2435, 'JPY', 'fi')); //currency: Japanese Yen | currencyLangFormat: Finnish
console.log(toCurrencies(1233, 'BDT'));

// Point : using regex pattern
console.log('--------------------------------');
const toCurrencies1 = (n, cur) => {
	const [integerPart, decimalPart] = n.toString().split('.');

	const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	const formattedCurrency = `${formattedInteger}.${decimalPart || '00'} ${cur}`;
	return formattedCurrency;
};
console.log(toCurrencies1(123456.789, 'EUR')); // currency: Euro | currencyLangFormat: Local
console.log(toCurrencies1(123456.789, 'USD', 'en-us')); // currency: US Dollar | currencyLangFormat: English (United States)
console.log(toCurrencies1(123456.789, 'USD', 'fa')); //currency: US Dollar | currencyLangFormat: Farsi
console.log(toCurrencies1(322342436423.2435, 'JPY')); //currency: Japanese Yen | currencyLangFormat: Local
console.log(toCurrencies1(322342436423.2435, 'JPY', 'fi')); //currency: Japanese Yen | currencyLangFormat: Finnish
console.log(toCurrencies1(1233, 'BDT', 'BDT'));

console.log('----------------------------------------------------------------');
// task : Write a JavaScript program to iterate over a callback n times.

const times = (n, fn, context = undefined) => {
	let i = 0;

	while (fn.call(context, i) !== false && ++i < n) {}
};

let output = '';
times(10, (i) => (output += i));
console.log(output);
// times(10, (i) => (output -= i));
// times(5, (i) => (output += i));
// console.log(output);
// times(10, (i) => (output += i));
// console.log(output);

const times1 = (n, callback) => {
	for (let i = 0; i < n; i++) {
		callback(i);
	}
};

let output1 = '';
times1(10, (i) => (output1 += i));
console.log(output1);

console.log('----------------------------------------------------------------');
// task : Write a JavaScript program to get removed elements of an given array until the passed function returns true.

// Point: solve using array.entries()
const takeWhile = (arr, func) => {
	for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
};

console.log(takeWhile([1, 2, 3, 4], (n) => n >= 3)); // [1,2]
console.log(takeWhile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n) => n >= 10));

// Point: Task: Write a JavaScript program to remove n elements from the end of a given array.
console.log('--------------------------------');
// Point: solve using slice function
const removeElement = (array, n = 1) =>
	array.slice(array.length - n, array.length);
console.log(removeElement([1, 2, 3], 2));
console.log(removeElement([1, 2, 3]));

// Point: solving without  using any built-in functions
const removeLastElement1 = (arr, n = 1) => {
	const result = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		if (n > 0) {
			result.unshift(arr[i]);
			n--;
		} else {
			break;
		}
	}
	return result;
};
console.log(removeLastElement1([1, 2, 3], 2));
console.log(removeLastElement1([1, 2, 3]));
console.log('----------------------------------------------------------------');
// task : Write a JavaScript program to get an array with n elements removed from the beginning from a given array.

// Point: solve using slice
const take = (arr, n = 1) => arr.slice(0, n);
console.log(take([1, 2, 3], 5));
console.log(take([1, 2, 3], 0));

// Point: solving  without using built-in functions;
const takeTwo = (arr, n = 1) => {
	const result = [];

	for (let i = 0; i < n; i++) {
		if (i < arr.length) {
			result[i] = arr[i];
		} else {
			break;
		}
	}
	return result;
};

console.log(takeTwo([1, 2, 3], 5));
console.log(takeTwo([1, 2, 3], 0));

const takeThree = (arr, n = 1) => {
	const result = [];

	for (let i = 0; i < n; i++) {
		if (i < arr.length) {
			result.push(arr[i]);
		} else {
			break;
		}
	}
	return result;
};

console.log(takeThree([1, 2, 3], 5));
console.log(takeThree([1, 2, 3], 0));
