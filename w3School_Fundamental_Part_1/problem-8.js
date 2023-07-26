' ust strict ';
console.log('working....');

// todo :  Find every element that exists in any of the two given arrays once.
// task :  once means that they should be combined into one array, but no element should appear twice in the final array.

// point :  solution 1 :  using filter and indexOf
const union = (arr1, arr2) => {
	let newArr = [];
	newArr = arr1.concat(arr2);
	return newArr.filter((item, index) => newArr.indexOf(item) === index);
};

console.log(union([1, 2, 3], [100, 2, 1, 10]));
console.log(union([1.2, 2, 3], [1, 2, 3]));

// point :  solution 2 :  using set

const union2 = (arr1, arr2) => {
	return Array.from(new Set([...arr1, ...arr2]));
};

console.log(union2([1, 2, 3], [100, 2, 1, 10]));
console.log(union2([1.2, 2, 3], [1, 2, 3]));

// point :  solution 3 :  using reduce

const union3 = (arr1, arr2) => {
	return arr1.reduce((acc, cur) => {
		return acc.includes(cur) ? acc : [...acc, cur];
	}, arr2);
};

console.log(union3([1, 2, 3], [100, 2, 1, 10]));
console.log(union3([1.2, 2, 3], [1, 2, 3]));

// point :  solution 4 :  using set and spread operator

const union4 = (arr1, arr2, comp) => {
	return Array.from(
		new Set([
			...arr1,
			...arr2.filter((item) => arr1.findIndex((i) => comp(i, item)) === -1),
		]),
	);
};

console.log(
	union4(
		[1, 1.2, 1.5, 3, 0],
		[1.9, 3, 0, 3.9],
		(a, b) => Math.round(a) === Math.round(b),
	),
);
console.log(
	union4(
		[1, 2, 3, 4],
		[1, 2, 3, 4, 5],
		(a, b) => Math.round(a) === Math.round(b),
	),
);

console.log('--------------- another solution -----------------');

// task : Convert a value to a safe integer.

// point :  solution 1 :  using Math.max and Math.min

const toSafeInteger = (num) => {
	return Math.max(
		Math.min(num, Number.MAX_SAFE_INTEGER),
		Number.MIN_SAFE_INTEGER,
	);
};

console.log(toSafeInteger('3.2'));
console.log(toSafeInteger(Infinity));
console.log(toSafeInteger('3.60'));

// point :  solution 2 :  using Math.round and Math.max

const toSafeInteger2 = (num) => {
	return Math.round(
		Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER),
	);
};

console.log(toSafeInteger2('3.2'));
console.log(toSafeInteger2(Infinity));
console.log(toSafeInteger2('3.60'));

console.log('--------------- another solution -----------------');

// task : Filter out the element(s) of a given array, that have one of the specified values.

// point :  solution 1 :  using filter and includes
const FilterOutElements = (arr, ...args) => {
	return arr.filter((item) => !args.includes(item));
};

console.log(FilterOutElements([2, 1, 2, 3], 1, 2));
console.log(FilterOutElements([2, 1, 2, 3], 3, 4));

// point : solution 2 :  using filter and indexOf
const FilterOutElements2 = (arr, ...args) => {
	return arr.filter((item) => args.indexOf(item) === -1);
};

console.log(FilterOutElements2([2, 1, 2, 3], 1, 2));
console.log(FilterOutElements2([2, 1, 2, 3], 3, 4));

// point : solution 3 :  using for loop
const filterOutElements3 = (arr, ...args) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (!args.includes(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

console.log(filterOutElements3([2, 1, 2, 3], 1, 2));
console.log(filterOutElements3([2, 1, 2, 3], 3, 4));

// point : solution 4 :  using reduce
const filterOutElements4 = (arr, ...args) => {
	return arr.reduce((acc, cur) => {
		if (!args.includes(cur)) {
			acc.push(cur);
		}
		return acc;
	}, []);
};

console.log(filterOutElements4([2, 1, 2, 3], 1, 2));
console.log(filterOutElements4([2, 1, 2, 3], 3, 4));

// point : solution 5 :  using for of loop
const filterOutElements5 = (arr, ...args) => {
	let newArr = [];

	for (let item of arr) {
		if (!args.includes(item)) {
			newArr.push(item);
		}
	}
	return newArr;
};

console.log(filterOutElements5([2, 1, 2, 3], 1, 2));
console.log(filterOutElements5([2, 1, 2, 3], 3, 4));

//  point: solution 6 :  without using any built-in methods
const filterOutElements6 = (arr, ...args) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		let flag = false;

		for (let j = 0; j < args.length; j++) {
			if (arr[i] === args[j]) {
				flag = true;
			}
		}

		if (!flag) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

console.log(filterOutElements6([2, 1, 2, 3], 1, 2));
console.log(filterOutElements6([2, 1, 2, 3], 3, 4));
