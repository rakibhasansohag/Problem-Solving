'use strict';
console.log('working...');

// Task : Check whether a value is object-like also check whether the provided value is not null and its typeof is equal to 'object'.
const isObjectLike = (value) => value !== null && typeof value === 'object';
console.log(isObjectLike({}));
console.log(isObjectLike([1, 2, 3]));
console.log(isObjectLike((x) => x));
console.log(isObjectLike(null));

// Task : Get a boolean determining if the passed value is an object or not.
const isObject = (obj) => obj === Object(obj);

console.log(isObject([1, 2, 3, 4]));
console.log(isObject([]));
console.log(isObject(['Hello!']));
console.log(isObject({ a: 1 }));
console.log(isObject({}));
console.log(isObject(true));

console.log('number ');

// Task :  Check if a given argument is a number.
const isNumber = (value) => typeof val === 'number';
console.log(isNumber('1'));
console.log(isNumber(1));

// Task : Return true if the specified value is null or undefined, false otherwise.
const isNull = (val) => val === null || val === undefined;

console.log(isNull(null));
console.log(isNull(undefined));
console.log(isNull(1));
