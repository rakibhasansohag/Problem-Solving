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
