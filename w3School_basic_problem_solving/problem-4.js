'use strict ';
console.log('working...');

/*
 task : Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
*/

// point : solution 1

function leapYear(year) {
	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));
console.log(leapYear(2020));
console.log(leapYear(2021));
console.log(leapYear(2022));

const demo = document.getElementById('demo');
demo.innerHTML = leapYear(2020);
