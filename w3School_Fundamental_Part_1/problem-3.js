' use strict ';
console.log('working.........');

/*

Todo : Write a JavaScript program to target a given value in a nested JSON object based on the given key.

Use the in operator to check if target exists in obj.
If found, return the value of obj[target].

Otherwise use Object.values(obj) and Array.prototype.reduce() to recursively call dig on each nested object until the first matching key/value pair is found.

*/

// point : ( solution 1 : using for in loop  )

const dig = (obj, target) => {
	if (target in obj) return obj[target];

	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			const result = dig(obj[key], target);

			if (result !== undefined) {
				return result;
			}
		}
	}
	return undefined;
};

const data = {
	level1: {
		level2: {
			level3: 'some data',
		},
	},
};

const dog = {
	status: 'success',
	message: 'https://images.dog.ceo/breeds/african/n02116738_1105.jpg',
};

// console.log(dig(data, 'some data')); // 'some data'
// console.log(dig(data, 'level3')); // 'some data'
// console.log(dig(data, 'level4')); // undefined
// console.log(dig(dog, 'status')); // 'success'

// point : ( solution 2 : using nested for loop and for in loop )
const dig2 = (obj, target) => {
	const stack = [obj];

	while (stack.length > 0) {
		const current = stack.pop();

		if (target in current) {
			return current[target];
		}

		for (const key in current) {
			if (typeof current[key] === 'object') {
				stack.push(current[key]);
			}
		}
	}

	return undefined;
};

// console.log(dig2(data, 'some data')); // 'some data'
// console.log(dig2(data, 'level3')); // 'some data'
// console.log(dig2(data, 'level4')); // undefined
// console.log(dig2(dog, 'status')); // 'success'

console.log('...................another problem...........');

// todo : Converts a specified number to an array of digits.

// point : ( solution 1 : using spread operator and map method )

const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

// console.log(digitize(123)); // [1, 2, 3]
// console.log(digitize(1230)); // [1, 2, 3, 0]
// console.log(digitize(8675309)); // [8, 6, 7, 5, 3, 0, 9]

// point : ( solution 2 : for loop and push method )

const digitize2 = (n) => {
	const result = [];

	for (const i of `${n}`) {
		result.push(parseInt(i));
	}
	return result;
};

// console.log(digitize2(123)); // [1, 2, 3]
// console.log(digitize2(1230)); // [1, 2, 3, 0]
// console.log(digitize2(8675309)); // [8, 6, 7, 5, 3, 0, 9]

// point : ( solution 3 : using for loop and unshift method (  reversing the total result ) )

const digitize3 = (n) => {
	const result = [];

	for (const i of `${n}`) {
		result.unshift(parseInt(i));
	}
	return result;
};

// console.log(digitize3(123)); // [1, 2, 3]
// console.log(digitize3(1230)); // [1, 2, 3, 0]
// console.log(digitize3(8675309)); // [8, 6, 7, 5, 3, 0, 9]

console.log('...................another problem...........');

// todo : Filter out the specified values from a specified array.

// point : ( solution 1 : using filter method )

const pull = (arr, ...args) => arr.filter((v) => !args.includes(v));

// console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')); // [ 'b', 'b' ]
// console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'b')); // [ 'a', 'c', 'a', 'c' ]

// point : ( solution 2 : using for loop and push method )

const pull2 = (arr, ...args) => {
	const result = [];

	for (const i of arr) {
		if (!args.includes(i)) {
			result.push(i);
		}
	}
	return result;
};

// console.log(pull2(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')); // [ 'b', 'b' ]
// console.log(pull2(['a', 'b', 'c', 'a', 'b', 'c'], 'b')); // [ 'a', 'c', 'a', 'c' ]

// todo : Combine the numbers of a given array into an array containing all combinations.

// point : ( solution 1 : using for loop and push method )

const powerset = (arr, index = 0, currentSubset = [], result = []) => {
	if (index === arr.length) {
		result.push(currentSubset.slice());
		return;
	}

	currentSubset.push(arr[index]);
	powerset(arr, index + 1, currentSubset, result);

	currentSubset.pop();
	powerset(arr, index + 1, currentSubset, result);
	return result;
};

// console.log(powerset([1, 2])); // [[], [1], [2], [1,2]]
// console.log(powerset([1, 2, 3])); // [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
// console.log(powerset([1, 2, 3, 4])); // [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3], [4], [1,4], [2,4], [1,2,4], [3,4], [1,3,4], [2,3,4], [1,2,3,4]]

// point : ( solution 2 : using filter  and map method )

const powerset2 = (arr) =>
	arr.reduce(
		(acc, cur) => acc.concat(acc.map((result) => [cur].concat(result))),
		[[]],
	);

console.log(powerset2([1, 2])); // [[], [1], [2], [1,2]]
console.log(powerset2([1, 2, 3])); // [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
console.log(powerset2([1, 2, 3, 4])); // [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3], [4], [1,4], [2,4], [1,2,4], [3,4], [1,3,4], [2,3,4], [1,2,3,4]]
