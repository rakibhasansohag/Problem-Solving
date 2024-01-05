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
