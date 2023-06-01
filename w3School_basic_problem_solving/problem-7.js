'use strict';
console.log('working...');

/*

task : Write a JavaScript program to calculate the days left before Christmas.

*/

// point : solution-1

let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {
	christmas.setFullYear(christmas.getFullYear() + 1);
}

let oneDay = 1000 * 60 * 60 * 24;
const day =
	Math.ceil((christmas.getTime() - today.getTime()) / oneDay) +
	' days left until Christmas!';

document.getElementById('demo').innerText = day;

console.log(day);
