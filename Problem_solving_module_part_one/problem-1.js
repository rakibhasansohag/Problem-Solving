'use strict';

console.log('working...');

/*
1. x = 10, y  =11, z = 12. এই মান গুলোর জন্য নিচের কোন অপশন গুলো true আর কোনগুলো false।

A. x< 10
B. y>11
C. x+y == 21
D. (x*z)%7 == 1
E. y<=z
F. !(x>y)
G. (x<y) && (y<z)
H. (x+y+z)%3==1
I. (x>=y) || (y<z)
J. (x>y) && (y<z)
K. !(x%5==0 && y%5==0)
L. (x<y && z%11==0) || (x%10==0)    
*/

let x = 10,
	y = 11,
	z = 12;

console.log(x < 10); //task 1:   false
console.log(`${x < 11} `); // task 2 :  true
console.log(x + y === 21); // task 3 :  true
console.log((x * z) % 7 === 1); // task 4 : true
console.log(y <= z); // task 5 : true
console.log(!(x > y)); // task 6 : true
console.log(x < y && y < z); // task 7 : true
console.log(x + y + (z % 3) === 1); // task 8: false
console.log(x >= y || y < z); // task 9 : true
console.log(x > y && y < z); // task 10 : false
console.log(!(x % 5 === 0 && y % 5 === 0)); // task 11 : true;
console.log((x < y && z % 11 === 0) || x % 10 === 0); // task 12 : true;
