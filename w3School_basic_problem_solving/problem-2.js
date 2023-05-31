'use strict';
console.log('working...');

/*
 
task : Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

*/

// point : solution 1

let slide1 = 5;
let slide2 = 6;
let slide3 = 7;

let slide = (slide1 + slide2 + slide3) / 2; // 9
let area = Math.sqrt(
	slide * ((slide - slide1) * (slide - slide2) * (slide - slide3)),
);

console.log(area);
const demo = document.getElementById('demo');
demo.innerHTML = area;
