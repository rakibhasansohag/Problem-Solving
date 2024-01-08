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
