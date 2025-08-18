// TODO : question 1 : Write a function that takes a string and returns it reversed.

const reverseString = (s = '') => s.split('').reverse().join('');

// example
console.log(reverseString('hello')); // "olleh"
console.log(reverseString('Rakib')); // "bikaR"

// TODO : Question 3 : Write a function that checks if a string is a palindrome (reads the same forward and backward).

const isPalindrome = (s = '') => {
	const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	return normalized === normalized.split('').reverse().join('');
};

// example
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true

// TODO : Question 5 : Write a function that removes all duplicate numbers from an array.

const removeDuplicates = (arr = []) => [...new Set(arr)];

// example
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4]
console.log(removeDuplicates([])); // []
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 3, 2, 24, 23, 21, 24, 23, 21])); // [1, 2, 3, 4]

// TODO : Question 9: Write a function that calculates the factorial of a number using a loop.

const factorial = (n) => {
	if (n < 0) return null;
	let result = 1;

	for (let i = 2; i <= n; i++) {
		result *= i;
	}

	return result;
};

// example
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-3)); // null

// TODO : Question 10 : Write a function that prints numbers from 1 to 20.

const pingPong = (from = 1, to = 20) => {
	const out = [];
	for (let i = from; i <= to; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			out.push('PingPong');
		} else if (i % 3 === 0) {
			out.push('Ping');
		} else if (i % 5 === 0) {
			out.push('Pong');
		} else {
			out.push(String(i));
		}
	}

	return out.join(', ');
};

// example
console.log(pingPong(1, 20));
// "1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16, 17, Ping, 19, Pong"
