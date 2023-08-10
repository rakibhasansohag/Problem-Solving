'use strict ';
console.log('working.......');

// task :  Write a javascript program that prints this pattern below .

/*
1.
*
**
***
****
*****

2.
****
****
****
****

*/

// point : problem x :

console.log('*');
console.log('**');
console.log('***');
console.log('****');
console.log('*****' + '\n');

// point : solution 1 : with out using any built in function

const printPattern = (n) => {
	let str = '';

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			str += '*';
		}

		str += '\n';
	}
	return str;
};

console.log(printPattern(5));

// point : solution 1 : using built in function (repeat)

const printPattern2 = (n) => {
	for (let i = 1; i <= n; i++) {
		console.log('*'.repeat(i));
	}
};

printPattern2(5);
