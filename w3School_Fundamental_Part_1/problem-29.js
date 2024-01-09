'use strict';
console.log('working...');

// task : Create a function that gets the argument at index n. If n is negative, the nth argument from the end is returned

// Point : solution 1 : using slice and rest operators

const nthArg =
	(n) =>
	(...args) =>
		args.slice(n)[0];

const third = nthArg(2);
third(1, 2, 3); // 3 arguments
third(2, 3); // undefined
const last = nthArg(-1);
console.log(last(1, 2, 3, 4, 5));

// Point : solution 2 using ternary operator/ condition login

const nthArg1 =
	(n) =>
	(...args) =>
		n >= 0 ? args[n] : args.slice(n)[0];

const third1 = nthArg1(2);
// console.log(third1(1, 2, 3)); /// output : 3
// console.log(third1(1, 2)); /// undefined

const last1 = nthArg1(-1);
console.log(last1(1, 2, 3, 4, 5));

// Point : solution  3 : using for loop iteration

const nthArg2 =
	(n) =>
	(...args) => {
		if (n >= 0) {
			for (let i = 0; i < args.length; i++) {
				if (i === n) {
					return args[i];
				}
			}
		} else {
			for (let i = args.length + n; i >= 0; i--) {
				if (i >= 0) {
					return args[i];
				}
			}
		}
	};

const third2 = nthArg2(2);
// console.log(third2(1, 2, 3));
// console.log(third2(1, 2));

const last2 = nthArg2(-1);
console.log(last2(1, 2, 3, 4, 5));

// Task : Write a JavaScript program to remove an event listener from an element.

// Point : Solution 1 : using removeEventListner to remove something from an element

const remove = (el, evt, fn, opts = false) =>
	el.removeEventListener(evt, fn, opts);

// || el.removeEventListener(evt, evt.type, opts);

const fn = () => console.log('!!! removeEventListener');
document.body.addEventListener('click', fn);
// console.log(remove(document.body, 'click', fn)); // undefined

console.log(remove(document.body, 'click', fn, true));

// Point : solution 2 : using call event with removeEventListener

const remove1 = (el, evt, fn, opts = false) => {
	const eventWrapper = (event) => fn.call(el, event);

	el.removeEventListener(evt, eventWrapper, opts);
};

const fn1 = () => console.log('! removeEventListener');
document.body.addEventListener('click', fn1);
console.log(remove1(document.body, 'click', fn1));

// Task : Write a JavaScript program to move the specified amount of elements to the end of the array.

// Point : solution 1 : solve using ... spread operator and slice
const moveSpecificElements = (arr, element) => [
	...arr.slice(element),
	...arr.slice(0, element),
];

console.log('----------------------------------------------------------------');
console.log(moveSpecificElements([1, 2, 3, 4, 5], 3));
console.log(moveSpecificElements([1, 2, 3, 4, 5], -3));

// Point : solution 2 : using for loop
const moveSpecificElements1 = (arr, element) => {
	const result = [];

	for (let i = element; i < arr.length + element; i++) {
		result.push(arr[((i % arr.length) + arr.length) % arr.length]);
	}

	return result;
};

console.log(moveSpecificElements1([1, 2, 3, 4, 5], 3));
console.log(moveSpecificElements1([1, 2, 3, 4, 5], -3));

// point : solution  : 3 solve without using built-in functions
const moveSpecificElements2 = (arr, element) => {
	const length = arr.length;
	const result = [];

	const startIndex = ((element % length) + length) % length;

	for (let i = 0; i < length; i++) {
		result[i] = arr[(startIndex + i) % length];
	}

	return result;
};

console.log(moveSpecificElements2([1, 2, 3, 4, 5], 3));
console.log(moveSpecificElements2([1, 2, 3, 4, 5], -3));
