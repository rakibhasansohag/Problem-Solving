'use strict';
console.log('problem 2');

/*

todo : Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

Note: Use String.split('\n') to create a string for each row, then String.split(delimiter) to separate the values in each row. Omit the second argument, delimiter, to use a default delimiter of ,. Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

Use Array.prototype.slice() and Array.prototype.indexOf('\n') to remove the first row (title row) if omitFirstRow is true.
Use String.prototype.split('\n') to create a string for each row, then String.prototype.split(delimiter) to separate the values in each row.
Omit the second argument, delimiter, to use a default delimiter of .
Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

 

*/
// point  : solution 1 ( using split and map )

const csToArray = (data, delimiter = ',', omitFirstRow = false) => {
	const res = data.split('\n').map((el) => el.split(delimiter));
	return omitFirstRow ? res.slice(1) : res;
};

console.log(csToArray('a,b\nc,d')); // [['a','b'],['c','d']];
console.log(csToArray('a;b\nc;d', ';')); // [['a','b'],['c','d']];
console.log(csToArray('head1,head2\na,b\nc,d', ',', true)); // [['a','b'],['c','d']];

// point  : solution 2 ( using split and reduce )

const csToArray2 = (data, delimiter = ',', omitFirstRow = false) => {
	const res = data.split('\n').reduce((acc, el) => {
		acc.push(el.split(delimiter));
		return acc;
	}, []);
	return omitFirstRow ? res.slice(1) : res;
};

console.log(csToArray2('a,b\nc,d')); // [['a','b'],['c','d']];
console.log(csToArray2('a;b\nc;d', ';')); // [['a','b'],['c','d']];
console.log(csToArray2('head1,head2\na,b\nc,d', ',', true)); // [['a','b'],['c','d']];

console.log('------------------ another problem ------------------');

