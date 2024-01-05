'use strict';
console.log('working...');

// task:  Negates a predicate function

// Point:  solution 1 : using a predicate function
const negate =
	(func) =>
	(...args) =>
		!func(...args);

console.log([1, 2, 3, 4, 5, 6].filter(negate((n) => n % 2 === 0)));
// Point : Solution 2 : using for loop
console.log('------------------------');
const array = [1, 2, 3, 4, 5, 6];
const result = [];

for (let i = 0; i < array.length; i++) {
	if (array[i] % 2 !== 0) result.push(array[i]);
}

console.log(result);

console.log('------------------------');
// Point : solving using map and condition
const negate2 =
	(func) =>
	(...args) =>
		!func(...args);

const array2 = [1, 2, 3, 4, 5, 6];
const result2 = array2.map(negate2((n) => n % 2 === 0));

const finalResult = array2
	.filter((value, index) => result2[index])
	.map((value) => value);

console.log(finalResult);

console.log('----------------------------------------------------------------');

// Task :  Nest a given flat array of objects linked to one another recursively

// Point :  solution 1 : using ( ... args)
const nest = (items, id = null, link = 'parent_id') =>
	items
		.filter((item) => item[link] === id)
		.map((item) => ({ ...item, children: nest(items, item.id) }));
// One top level comment
const comments = [
	{ id: 1, parent_id: null },
	{ id: 2, parent_id: 1 },
	{ id: 3, parent_id: 1 },
	{ id: 4, parent_id: 2 },
	{ id: 5, parent_id: 4 },
];
const nestedComments = nest(comments);
console.log(nestedComments);

// Point : solution 2  : using (for of loop)

const nest1 = (items, id = null, link = 'parent_id') => {
	const nestedItems = [];

	for (const item of items) {
		if (item[link] === id) {
			const newItem = { ...item, children: nest(items, item.id) };
			nestedItems.push(newItem);
		}
	}

	return nestedItems;
};
const comments1 = [
	{ id: 1, parent_id: null },
	{ id: 2, parent_id: 1 },
	{ id: 3, parent_id: 1 },
	{ id: 4, parent_id: 2 },
	{ id: 5, parent_id: 4 },
];

const nestedComments1 = nest(comments1);
console.log(nestedComments1);

// Task : Return true if the provided predicate function returns false for all elements in a collection, false otherwise

// Point : Solution1 : using some method
console.log('-----------------------------');
const none = (arr, fn = Boolean) => !arr.some(fn);

console.log(none([0, 1, , 3, 0], (x) => x == 2)); // true
console.log(none([0, 0, 0])); // true
console.log(none([1, 1, 0])); // false
console.log('-----------------------------');

// Point : solution2 : using every method (will be false if the condition is true )
const none1 = (arr, fn = Boolean) => !arr.every((value) => !fn(value));

console.log(none1([0, 1, 3, 0], (x) => x === 2)); // false
console.log(none1([0, 0, 0])); // false
console.log(none1([1, 1, 1])); // true
console.log(none1([1, 1, 0])); //true

console.log('----------------------------------------------------------------');
// Point : solution 3 : using filter function
const none2 = (x, y = Boolean) => x.filter(y).length === 0;

console.log(none2([0, 1, 3, 0], (x) => x === 2)); // true
console.log(none2([0, 0, 0])); // true
console.log(none2([1, 1, 1])); // false
console.log(none2([1, 1, 0])); //false
