'use strict';
console.log('working');

//  todo : problem 1 : Compare two objects to determine if the first one contains equivalent property values to the second one.

// point solution 1 : ( using OBJECT.KEYS() )

function compareObjects(obj1, obj2) {
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length !== keys2.length) {
		return false;
	}

	for (let key of keys1) {
		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}

	return true;
}

console.log(
	compareObjects(
		{ age: 25, hair: 'long', beard: true },
		{ hair: 'long', beard: true },
	),
); // false

console.log(
	compareObjects(
		{ age: 25, hair: 'long', beard: true },
		{ hair: 'long', beard: true, age: 25 },
	),
); // true

console.log(
	compareObjects(
		{ hair: 'long', beard: true },
		{ age: 25, hair: 'long', beard: true },
	),
); // false

// point solution 2 : ( using OBJECT.KEYS(), every()and obj.hasOwnProperty() by following the w3School solution )

function compareObjects2(obj1, obj2) {
	return Object.keys(obj2).every(
		(key) => obj1.hasOwnProperty(key) && obj1[key] === obj2[key],
	);
}

console.log(
	compareObjects2(
		{ age: 25, hair: 'long', beard: true },
		{ hair: 'long', beard: true },
	),
); // true

console.log(
	compareObjects2(
		{ age: 25, hair: 'long', beard: true },
		{ hair: 'long', beard: true, age: 25 },
	),
); // true

console.log(
	compareObjects2(
		{ hair: 'long', beard: true },
		{ age: 25, hair: 'long', beard: true },
	),
); // false
