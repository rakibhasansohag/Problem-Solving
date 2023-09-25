' use strict';
console.log('working....');

// Task : Replace all but the last number of characters with the specified mask character.

// Point : solution 1 : using slice method

const musk = (cc, num) => {
	let len = cc.length;
	return cc.slice(len - num).padStart(len, '*');
};

console.log(musk('123456789', 4));
console.log(musk('123456789', 3));

// Point : solution 2 : using repeat method

const musk2 = (cc, num) => {
	let len = cc.length;
	return '*'.repeat(len - num) + cc.slice(len - num);
};

console.log(musk2('123456789', 4));
console.log(musk2('123456789', 3));

// Point : solution 3 : 3 method with default value

const musk3 = (cc, num = 4, mask = '*') => {
	let len = cc.length;
	return mask.repeat(len - num) + cc.slice(len - num);
};

console.log(musk3('123456789', 4));
console.log(musk3('123456789', 3));
console.log(musk3('123456789', 3, '$'));
