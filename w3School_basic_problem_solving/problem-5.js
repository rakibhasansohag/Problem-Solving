'use strict';
console.log('working...');
/*
 task : Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
*/

// point : solution-1

/*

for (let year = 2014; year <= 2050; year++) {
	let date = new Date(year, 0, 1);
	if (date.getDay() === 0) {
		console.log(`1st January is being a Sunday in ${year}`);
		document.getElementById(
			'demo',
		).textContent = `1st January is being a Sunday in ${year}`;
	}
}

*/

// point : solution-2

let years = [];
for (let year = 2014; year <= 2050; year++) {
	let date = new Date(year, 0, 1);

	if (date.getDay() === 0) {
		years.push(year);
	}
}

if (years.length > 0) {
	console.log(`1st January is being a Sunday in ${years.join(', ')}`);
	document.getElementById(
		'demo',
	).textContent = `1st January is being a Sunday in ${years.join(', ')}`;
} else {
	console.log(`1st January is not being a Sunday in ${years.join(', ')}`);
	document.getElementById(
		'demo',
	).textContent = `1st January is not being a Sunday in ${years.join(', ')}`;
}
