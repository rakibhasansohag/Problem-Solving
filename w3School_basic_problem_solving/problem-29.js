' use strict';
console.log('working...');

// task :  Check whether the last digit of the three given positive integers is same

// point :: solution 1

function checkLastDigit(num1, num2, num3) {
	if (num1 > 0 && num2 > 0 && num3 > 0) {
		return (
			num1 % 10 == num2 % 10 && num2 % 10 == num3 % 10 && num3 % 10 == num1 % 10
		);
	} else {
		return false;
	}
}

console.log(checkLastDigit(20, 30, 400)); // true
console.log(checkLastDigit(-20, 30, 400)); // false
console.log(checkLastDigit(20, -30, 400)); // false

// task : Create new string with first 3 characters are in lower case

// point :: solution 1

function newString(str) {
	if (str.length <= 3) {
		return str.toLowerCase();
	}

	let firstThreeChar = str.substring(0, 3).toLowerCase();
	let rest = str.substring(3);
	return firstThreeChar + rest;
}

console.log(newString('PYTHON')); // pytHON
console.log(newString('JavaScript')); // javAScript
console.log(newString('js')); // js
console.log('------------------');

// task : Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false

// point :: solution 1

function checkMarks(marks, isFinal) {
	if (isFinal) {
		return marks >= 90;
	} else {
		return marks >= 89 && marks <= 100;
	}
}

console.log(checkMarks(89, false)); // true
console.log(checkMarks(99, true)); // true
console.log(checkMarks(99, false)); // true
console.log(checkMarks(89, ' ')); // false
console.log(checkMarks(1000, false)); // false

console.log('------------------');

// task : Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

// point :: solution 1

function sumOfTwo(num1, num2) {
	let sum = num1 + num2;

	if (sum >= 50 && sum <= 80) {
		return 65;
	} else {
		return 80;
	}
}
console.log(sumOfTwo(20, 30)); // 65
console.log(sumOfTwo(80, 30)); // 80

console.log('------------------');

// task : Check from two given integers whether one of them is 8 or their sum or difference is 8

// point :: solution 1

function checkEight(num1, num2) {
	if (num1 == 8 || num2 == 8) {
		return 8;
	}

	if (num1 + num2 === 8 || Math.abs(num1 - num2) == 8) {
		return true;
	} else {
		return false;
	}
}
console.log(checkEight(8, 8)); // 8
console.log(checkEight(8, 2)); // 8
console.log(checkEight(4, 4)); // true
console.log(checkEight(17, 18)); // false
