'use strict';
console.log('working...');

/*

task : Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".


*/

// point : solution-1

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

const guessNumber = prompt('Guess the number between 1 and 10 inclusive');

if (guessNumber == randomNumber) {
	console.log('Good Work');
	document.getElementById(
		'demo',
	).textContent = `Good Work ${guessNumber} is the correct number`;
} else {
	console.log('Not matched');
	document.getElementById(
		'demo',
	).textContent = `Not matched ${guessNumber} is not the correct number`;
}
