'use strict';

// একটি জাভাস্ক্রিপ্ট প্রোগ্রাম লিখুন যা ৩টি  পূর্ণসংখ্যা নেয়। এবং তাদের মধ্যে থেকে সবচেয়ে বড় পূর্ণসংখ্যা প্রিন্ট করুন।

//  / solution 1 :  with out using built-in functions
const biggerFunc = function (a, b, c) {
	let largest = a;

	if (b > largest) {
		largest = b;
	}
	if (c > largest) {
		largest = c;
	}

	return largest;
};

console.log(biggerFunc(21, 10, 11)); /// 21

// / solution 2 :

function maxNumber(...numbers) {
	{
		return numbers.reduce((max, number) => (max > number ? max : number));
	}
}
//
console.log(maxNumber(10, 11, 21));
