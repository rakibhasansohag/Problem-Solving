// Write a function which takes two numbers and returns their sum.
//
// 1.Can I restate the problem in my own words?
'implement addition';
// 2.What are the inputs that go into the problem?

// 3.What are the outputs that should come from the solution to the problem?
'-int? float? string?';

// 4.Can the outputs be determined from the inputs? In other words, do I have enough information to solve the
// 5.How should I label the important pieces of data that are a part of the problem?

// 6.What should I do if I run into edge cases?
const add = (num1, num2) => num1 + num2;

console.log(add(1, 2));

// 7.Have I considered all possible edge cases?

// Task : Problem 2 Write a function which takes in a string and returns counts of each character in the string.

//1. Can I restate the problem in my own words?

function charCount(str) {
	// 2. What are the inputs that go into the problem?
	var result = {};

	// 3. What are the outputs that should come from the solution to the problem?
	for (var i = 0; i < str.length; i++) {
		var char = str[i].toLowerCase();

		// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
		if (result[char] > 0) result[char]++;
		else result[char] = 1;
	}

	// 5. How should I label the important pieces of data that are a part of the problem?
	return result;
}

console.log(charCount('aabb'));
console.log(charCount('hello world!'));
