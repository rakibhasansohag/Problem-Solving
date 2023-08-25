'use strict';
console.log('working...');

// task : Count the occurrences of a value in an array.

/* 

point :::: note :

/ 1 Use recursion.

/ 2 Check if the passed object is null and, if so, return null.

/ 3 Use Object.assign() and an empty object ({}) to create a shallow clone of the original.

/ 4 Use Object.keys() and Array.prototype.forEach() to determine which key-value pairs need to be deep cloned.

/ 5 If the object is an Array, set the clone's length to that of the original and use Array.from(clone) to create a clone.

*/

// point : solution 1 : using recursion

const deepClone = (obj) => {
	let clone = Object.assign({}, obj); // for shallow clone

	Object.keys(clone).forEach((key) => {
		clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
	});
	return Array.isArray(obj)
		? (clone.length = obj.length) && Array.from(clone)
		: clone;
};

const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj

console.log(b);

// point : solution 2 : using JSON

const deepClone2 = (obj) => {
	let clone = JSON.parse(JSON.stringify(obj));

	Object.keys(clone).forEach((key) => {
		clone[key] = typeof obj[key] === 'object' ? deepClone2(obj[key]) : obj[key];
	});
	return Array.isArray(obj)
		? (clone.length = obj.length) && Array.from(clone)
		: clone;
};

const c = { foo: 'bar', obj: { a: 1, b: 2 } };
const d = deepClone2(c); // a !== b, a.obj !== b.obj
console.log(d);

// point : solution 3 : using recursion

// task : Detect whether the website is being opened in a mobile device or a desktop/laptop.

// point : solution 1 : using navigator

// const detectDeviceType = () => {
// 	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
// 		navigator.userAgent,
// 	)
// 		? 'Mobile'
// 		: 'Desktop';
// };

// console.log(detectDeviceType()); // "Mobile" or "Desktop"
// detectDeviceType();
// point : solution 2 : using matchMedia

const detectDeviceType2 = () => {
	return window.matchMedia('(max-width: 768px)').matches ? 'Mobile' : 'Desktop';
};

// console.log(detectDeviceType2()); // "Mobile" or "Desktop"

// Point : solution 3 : using window.orientation

const detectDeviceType3 = () => {
	return isNaN(window.orientation) ? 'Desktop' : 'Mobile';
};

// console.log(detectDeviceType3()); // "Mobile" or "Desktop"

// task : Return the difference between two arrays .

/*

point :::: note :

/ 1 Create a Set from each array, then use Array.prototype.filter() on each of them to only keep values not contained in the other.

/ 2 Finally, create a Set from the results and convert it back into an array. (For values that are objects or arrays, their references should be the same in the original and the filtered arrays.)

*/

// point : solution 1 : using filter()

const difference = (a, b) => {
	const s = new Set(b);
	return a.filter((x) => !s.has(x));
};

console.log(difference([1, 2, 3], [1, 2, 4])); // [3]
console.log(difference([1, 2, 3], [1, 2, 3])); // []

// point : solution 2 : using filter()

const difference2 = (a, b, comp = (a, b) => a === b) =>
	a.filter((x) => b.findIndex((y) => comp(x, y)) === -1);

console.log(difference2([1, 2, 3], [1, 2, 4])); // [3]
console.log(difference2([1, 2, 3], [1, 2, 3])); // []
