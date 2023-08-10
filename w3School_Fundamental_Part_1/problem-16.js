'use strict';
console.log('working.....');

// task : Write a JavaScript program to create a function that invokes fn in a given context. Optionally add any additional variables to the arguments beginning.

// point : solution 1 : using for loop

const bind = (fn, context, ...args) => {
	return function (...newArgs) {
		return fn.apply(context, args.concat(newArgs));
	};
};

function greet(greeting, punctuation) {
	return greeting + ' ' + this.user + punctuation;
}

const rakib = { user: 'Morning' };
const greetMorning = bind(greet, rakib);

console.log(greetMorning('Good', '!'));

// point : solution 2 : with spread operator

const bind2 = (fn, context, ...args) => {
	return function (...newArgs) {
		return fn.apply(context, [...args, ...newArgs]);
	};
};

function greet2(greeting, punctuation) {
	return greeting + ' ' + this.user + punctuation;
}

console.log(bind2(greet2, rakib, 'Good', '!')());

// point : solution 3 : using bind method

function greet3(greeting, punctuation) {
	return greeting + ' ' + this.user + punctuation;
}

const greet3Morning = greet3.bind(rakib, 'Good', '!');

console.log(greet3Morning());
