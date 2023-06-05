'use strict ';
console.log('working...');

// task 16 : Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// point : solution 1

function addPy(str) {
	if (str === null || str === undefined || str.substring(0, 2) === 'Py') {
		return str;
	} else {
		return 'Py' + str;
	}
}

// /test data for solution 1
console.log(addPy('Python')); // Python
console.log(addPy('thon')); // Python
console.log(addPy('not')); // pyNot

// point : solution 2 with using startsWith() method

function addPy2(str) {
	if (str === null || str === undefined || str.startsWith('Py')) {
		return str;
	} else {
		return 'Py' + str;
	}
}
// /test data for solution 2
console.log('...........................................................');
console.log(addPy2('Python')); // Python
console.log(addPy2('thon')); // Python
console.log(addPy2('not')); // pyNot
