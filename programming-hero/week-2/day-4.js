/**
 * Task

Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

: This value is equal to .
: This value is equal to .
: This value is equal to 
: This value is equal to 
Note: The names of the object's properties must be spelled correctly to pass this challenge.

Input Format

The first line contains an integer denoting .
The second line contains an integer denoting .

Constraints

Output Format

Return a object that has the properties specified above. Locked code in the editor prints the returned object's , , , and  to STDOUT.

* 

* */
function Rectangle(a, b) {
	this.length = a;
	this.width = b;
	this.perimeter = 2 * (a + b);
	this.area = a * b;
}

/**
 * 
 * Task

Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects  in array  that satisfy .

Input Format

The first line contains an integer denoting .
Each of the  subsequent lines contains two space-separated integers describing the values of  and .

Constraints

Output Format

Return a count of the total number of objects  such that . Locked stub code in the editor prints the returned value to STDOUT.

 */

function getCount(objects) {
	let count = 0;
	for (let i = 0; i < objects.length; i++) {
		if (objects[i].x === objects[i].y) {
			count++;
		}
	}
	return count;
}

/**
 * 
 * Task

Create a Polygon class that has the following properties:

A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.

Note: The perimeter method must be lowercase and spelled correctly.

Input Format

There is no input for this challenge.

Output Format

The perimeter method must return the polygon's perimeter using the side length array passed to the constructor.

Explanation

Consider the following code:

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());
 */

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
	constructor(sides) {
		this.sides = sides;
	}
	perimeter() {
		return this.sides.reduce((a, b) => a + b);
	}
}
