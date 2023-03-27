'use strict';
/*3. আমরা for লুপ ব্যাবহার করে ১ থেকে ১০ এর যোগফল বের করেছি। নিচের ৫টি  ধারা গুলোর যোগফল বের করার জন্য প্রোগ্রাম লিখ।
A. 1+2+3+.....50
B. 1+3+5+...+39 ( প্রথম ২০টি পদ)
C. 50 + 49 + 48 + 47 + …… ( প্রথম ১০টি পদ)
D. 2 + 5 + 8 + 11 + 14 + …..   (প্রথম ১০টি পদ)
E. 100 + 97 + 94 + 91 + ….  (0 এর চেয়ে বড় পর্যন্ত)
*/

// task 0  : 1 to 10 sum
let sum = 0;
for (let i = 0; i <= 10; i++) {
	sum += i;
}

console.log(sum); /// 55

// task 1 : 1+2+3+......50

let sum1 = 0;
for (let i = 1; i < 50; i++) {
	sum1 += i;
}

console.log(sum1); /// 1225

// task 2 : 1 + 3 + 5 + .....+ 39 (first 20 positions)

let sum2 = 0;
for (let i = 1; i <= 39; i += 2) {
	sum2 += i;
}

console.log(sum2); /// 400

// task 3 : 50 + 49 + 48 + 47 + ..... ( first 10 positions)

let sum3 = 0;
let currentNumber3 = 50;
for (let i = 0; i < 10; i++) {
	sum3 += currentNumber3;
	currentNumber3--;
}
console.log(sum3); /// 455

// task 4 : 2 + 5 + 8 + 11 + 14 + ....(first 10 positions)

let sum4 = 0;
let currentNumber4 = 2;
let indexNumber4 = 10;
for (let i = 0; i < indexNumber4; i++) {
	sum4 += currentNumber4;
	currentNumber4 += 3;
}
console.log(sum4); /// 155

// task 5 : 100 + 97 + 94 + 91 + ....( up to grater than 0)

let sum5 = 0;
let currentNumber5 = 100;

for (currentNumber5; currentNumber5 > 0; currentNumber5 -= 3) {
	sum5 += currentNumber5;
}

console.log(sum5); /// 1717
