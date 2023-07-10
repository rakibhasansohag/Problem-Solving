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

console.log('---------------- another problem -----------------');

// todo : Copy a string to the clipboard

/*

Write a JavaScript program to copy a string to the clipboard.

 #. Create a new <textarea> element, fill it with the supplied data and add it to the HTML document.

 # Use Selection.getRangeAt()to store the selected range (if any).
Use Document.execCommand('copy') to copy to the clipboard.

# Remove the <textarea> element from the HTML document.
Finally, use Selection().addRange() to recover the original selected range (if any).

 point : NOTICE: The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet.

*/

// point  : solution 1 ( using document.execCommand() , getSelection , createTextNode() , appendChild() , select() , removeChild() )

const boxElement = document.getElementById('element');
const textareaElement = document.getElementById('textarea');

function copyToClipboard(text) {
	textareaElement.value = text;
	textareaElement.select();
	document.execCommand('copy');
}

copyToClipboard('Hello World');
