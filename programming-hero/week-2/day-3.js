/*
 * Complete the isPositive function.
In this challenge, we practice using throw and catch statements to work with custom error messages.

Task

Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

If  is , throw an Error with  Zero Error.
If  is negative, throw an Error with  Negative Error.
Input Format

Locked stub code in the editor reads the following input from stdin and passes each value of  to the function as an argument:
The first line is an integer, , denoting the number of times the function will be called with some .
Each line  of the  subsequent lines contains an integer denoting some .

Constraints

Output Format

If the value of  is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:

If  is , throw an Error with  Zero Error.
If  is negative, throw an Error with  Negative Error.

 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
	if (a > 0) {
		return 'YES';
	} else if (a === 0) {
		throw new Error('Zero Error');
	} else {
		throw new Error('Negative Error');
	}
}

isPositive(3);

/**
 * Function Description

Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:

int nums[n]: an array of integers
Returns

int: the second largest number in 
Input Format

The first line contains an integer, , the size of the  array.
The second line contains  space-separated numbers that describe the elements in .

Constraints

, where  is the number at index .
The numbers in  may not be distinct.
 * Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.

 */

function getSecondLargest(nums) {
	// Complete the function
	let sorted = nums.sort ((a,b) => b-a)

	let largest = sorted[0]

	for (let i = 0 ; i < sorted.length ; i ++) {
		if (sorted[i] < largest) {
			return sorted[i]
		}
	}
	return null
}

console.log(getSecondLargest([1, 2, 3, 4, 6,6,5]))
