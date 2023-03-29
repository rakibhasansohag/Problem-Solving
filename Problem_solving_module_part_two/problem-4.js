'use strict';
console.log('working...');

/*


4. Write a JavaScript program to construct the following pattern. using a nested for loop
	Example Output: 
* * * * *
* * * * *
* * * * * 
* * * * *
* * * * *


*/

// task 1 : solution 1 done
let star = '*';
for (let i = 0; i < 5; i++) {
	console.log(
		' first try',
		star + ' ' + star + ' ' + star + ' ' + star + ' ' + star,
	);
}

// task 2: solution 2 done
for (let i = 0; i < 5; i++) {
	let star = '';
	for (let j = 0; j < 5; j++) {
		star += '* ';
	}

	console.log(star);
}
