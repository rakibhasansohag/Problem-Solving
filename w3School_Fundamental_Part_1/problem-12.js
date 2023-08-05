'use strict';
console.log('working....');

/*
task : Write a JavaScript program to curry (curries) a function

/According to wiki.haskell.org "Currying is the process of transforming a function that takes multiple arguments into a function that takes just a single argument and returns another function if any arguments are still needed. f x y = g (x,y), however the curried form is usually more convenient because it allows partial application.

Note: Use recursion. If the number of provided arguments (args) is sufficient, call the passed function fn. Otherwise, return a curried function fn that expects the rest of the arguments. If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. Math.min()), you can optionally pass the number of arguments to the second parameter arity.

*/

// point  solution 1 - using recursion

const curry = (fn, arity = fn.length, ...args) => {
	return arity <= args.length
		? fn(...args)
		: curry.bind(null, fn, arity, ...args);
};

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6

console.log(curriedSum(1)(2, 3)); // 6

// point  solution 2 - using double function

const curry2 = (fn, arity = fn.length, ...args) => {
	return arity <= args.length
		? fn(...args)
		: function (...args2) {
				return curry2(fn, arity, ...args, ...args2);
		  };
};

console.log(curry2(Math.pow)(2)(8)); // 6
console.log(curry2(Math.min, 3)(10)(50)(2)); // 2
