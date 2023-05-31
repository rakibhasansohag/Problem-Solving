'use strict';
console.log('working');

/* 
task : problem 1 : Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

// point : solution 1

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);
console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);

// point : solution 2
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
	dd = '0' + dd;
}

if (mm < 10) {
	mm = '0' + mm;
}

today = mm + '-' + dd + '-' + yyyy;
today = mm + '/' + dd + '/' + yyyy;
today = dd + '-' + mm + '-' + yyyy;
today = dd + '/' + mm + '/' + yyyy;

const demo = document.getElementById('demo');
demo.innerHTML = today;
