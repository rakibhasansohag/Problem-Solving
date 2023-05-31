'use strict';
console.log('working...');

/* 
task: Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
*/

// point : solution 1

function animate_string(id) {
	let element = document.getElementById(id);
	let textNode = element.childNodes[0]; // assuming no other children

	let text = textNode.data;

	setInterval(() => {
		text = text[text.length - 1] + text.substring(0, text.length - 1);
		textNode.data = text;
	}, 100);
}

animate_string('demo');
