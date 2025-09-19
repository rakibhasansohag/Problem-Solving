/*
Objective

In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

Task

We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

Add an area method to Rectangle's prototype.
Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.
Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.
*/

class Rectangle {
	constructor(w, h) {
		this.w = w;
		this.h = h;
	}
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function () {
	return Rectangle.w * Rectangle.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
	constructor(s) {
		super(s, s);
	}
}

/**
 * Task

The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:

Finds the initial values of  and  by plugging the area and perimeter values into the formula:
where  is the rectangle's area and  is its perimeter.
Creates an array consisting of  and  and sorts it in ascending order.
Returns the sorted array.
Input Format

The first line contains an integer denoting .
The second line contains an integer denoting .

Constraints

Output Format

Return an array consisting of  and , sorted in ascending order.

Sample Input 0

10
14
Sample Output 0

10
14
Explanation 0

The locked code in the editor passes the following arrays to the tag function:

The value of  is [ 'The area is: ', '.\nThe perimeter is: ', '.' ].
The value of  is [ 140, 48 ], where the first value denotes the rectangle's area, , and the second value denotes its perimeter, .
When we plug those values into our formula, we get the following:

We then store these values in an array, [14, 10], sort the array, and return the sorted array, [10, 14], as our
 * 
 */

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    
	const area = expressions[0];
	const perimeter = expressions[1];
	
	const sum = perimeter / 2;
	const diff = Math.sqrt(sum * sum - 4 * area);

	const s1 = (sum + diff) / 2;
	const s2 = (sum - diff) / 2;
	
	
	return [s1, s2].sort((a,b) => a - b);
}

