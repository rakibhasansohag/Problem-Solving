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

console.log('---------------- another problem -----------------');

// task : Create a function that invokes the method at a given key of an object.

// point : solution 1 : using bracket notation

const invoke = (obj, method, ...args) => {
	return obj[method].apply(obj, args);
};

const obj = {
	message: 'Hello, Rakib!',
	sayHi() {
		return this.message;
	},
};

console.log(invoke(obj, 'sayHi'));

//  point : solution 2 : using spread operator

const invoke2 = (obj, method, ...args) => {
	return obj[method](...args);
};

console.log(invoke2(obj, 'sayHi'));

// point : solution 3 : using bind method

const invoke3 = (obj, method, ...args) => {
	return obj[method].bind(obj, ...args)();
};

console.log(invoke3(obj, 'sayHi'));

// point : solution 4 : using w3schools way (not working)

const invoke4 = (obj, method, ...args) =>
	function () {
		return obj[method].apply(obj, args.concat(...arguments));
	};

const Rakib = {
	user: 'Rakib',
	greet: function (greeting, punctuation) {
		return greeting + ' ' + this.user + punctuation;
	},
};
const rakibObj = invoke4(Rakib, 'greet');
console.log(rakibObj('hi', '!'));

console.log('---------------- another problem -----------------');

// task : Cast the provided value as an array if it's not one.

// point : solution 1 : using spread operator

const castArray = (value) => (Array.isArray(value) ? value : [value]);

console.log(castArray('rakib'));
console.log(castArray([1, 2, 3]));

// point : solution 2 : using Array.from()

const castArray2 = (value) => Array.from(value);

console.log(castArray2('rakib'));
console.log(castArray2([1, 2, 3]));

// point : solution 3 : without using any built-in method

const castArray3 = (value) => {
	if (Array.isArray === true) {
		return value;
	} else {
		return [value];
	}
};

console.log(castArray3('rakib'));
console.log(castArray3([1, 2, 3]));
