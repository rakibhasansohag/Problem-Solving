'use strict';
// Task : Create a new object from the specified object, where all the keys are in lowercase.

// point: using Object.keys

const lowercaseKeys = (obj) =>
	Object.keys(obj).reduce((acc, key) => {
		// acc[key.charAt(0).toUpperCase() + key.slice(1)] = obj[key];
		acc[key.toLowerCase()] = obj[key];
		return acc;
	}, {});

const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj);
console.log(myObjLower);

// Point : using for...in loop

const lowercaseKeys1 = (obj) => {
	const result = {};

	for (const key in obj) {
		result[key.toLowerCase()] = obj[key];
	}

	return result;
};

const myObj1 = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower1 = lowercaseKeys1(myObj1);
console.log(myObjLower1);

