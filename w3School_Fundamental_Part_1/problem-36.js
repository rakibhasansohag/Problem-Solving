'use strict';
console.log('working...');
// task : Write a JavaScript program to get every element in any of the two arrays at once.

// Point : solution 1 : using Array.from and Set
const unionElements = (a, b) => Array.from(new Set([...a, ...b]));
console.log(unionElements([1, 2, 3], [4, 3, 2]));
console.log(unionElements([1, 2, 3], [1, 2, 3]));

// Point : solution 2 : using includes and for loop
const unionElements1 = (a, b) => {
	const unionArr = [];

	for (let i = 0; i < a.length; i++) {
		if (!unionArr.includes(a[i])) {
			unionArr.push(a[i]);
		}
	}

	for (let j = 0; j < b.length; j++) {
		if (!unionArr.includes(b[j])) {
			unionArr.push(b[j]);
		}
	}
	return unionArr;
};
console.log(unionElements1([1, 2, 3], [4, 3, 2]));
console.log(unionElements1([1, 2, 3], [1, 2, 3]));
console.log('working...');
// task : Write a JavaScript program to build an array, using an iterator function and an initial seed value.

// point : solution 1 : using while loop and and condition
const unfold = (fn, seed) => {
	let result = [];
	let value = [null, seed];
	while ((value = fn(value[1]))) result.push(value[0]);
	return result;
};
let fun = (number) => (number > 50 ? false : [-number, number + 10]);
let secondFun = (number) => (number > 100 ? false : [number, number + number]); // 2 ** 2
console.log(unfold(fun, 10));
console.log(unfold(secondFun, 10));

// Point : using rest  operator
const unfold1 = (fn, seed) => {
	const unfoldRecursive = (result, value) => {
		const next = fn(value);
		return next ? unfoldRecursive([...result, next[0]], next[1]) : result;
	};
	return unfoldRecursive([], seed);
};

let funBegin = (number) => (number > 50 ? false : [-number, number + 10]);
console.log(unfold1(funBegin, 10));
let thirdFun = (number) => (number > 100 ? false : [number, number + number]);
console.log(unfold1(thirdFun, 10));
console.log('----------------------------------------------------------------');

// task : Unflatten an object with the paths for keys.

// point : solution 1 : using nested reduce and split(".")
// / note : what is unflatten an object ?
//  ans : A flattened object is one where nested properties are represented using a delimiter or a specific naming convention.

const unflattenObject = (obj) =>
	Object.keys(obj).reduce((acc, cur) => {
		if (cur.indexOf('.') !== -1) {
			const keys = cur.split('.');
			Object.assign(
				acc,
				JSON.parse(
					'{' +
						keys
							.map((value, index) =>
								index !== keys.length - 1 ? `"${value} " : {` : `"${value}" : `,
							)
							.join('') +
						obj[cur] +
						'}'.repeat(keys.length),
				),
			);
		} else acc[cur] = obj[cur];
		return acc;
	}, {});
console.log(unflattenObject({ 'a.b.c': 1, d: 1 }));

// point : using for loop instead of map
const unflattenObject1 = (obj) =>
	Object.keys(obj).reduce((acc, cur) => {
		if (cur.indexOf('.') !== -1) {
			const keys = cur.split('.');
			let nestedObj = acc;

			for (let i = 0; i < keys.length - 1; i++) {
				if (!nestedObj[keys[i]]) {
					nestedObj[keys[i]] = {};
				}
				nestedObj = nestedObj[keys[i]];
			}

			nestedObj[keys[keys.length - 1]] = obj[cur];
		} else {
			acc[cur] = obj[cur];
		}

		return acc;
	}, {});

console.log(JSON.stringify(unflattenObject1({ 'a.b.c': 1, d: 1 })));
