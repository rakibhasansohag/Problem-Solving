/*  task: Write a JS function AreaOfTriangle that takes the base and height of a triangle and returns its area.
 Example 1:
 Input: 7, 8
 Output: 14
 Explanation: Base 7 and height 8. After calculation,its area is 14.
 Example 2:
 Input: 10, 10
 Output: 50
*/
// Constraints:
// Base cannot be negative
// Height cannot be negative

// solution 1:
//  task : areaOfTriangle = (base * height) / 2

const areaOfTriangle = (base, height) => {
	if (base <= 0 || height <= 0) {
		//point we can also throw an error
		console.log('base and height must be positive');
	}
	const area = (base * height) / 2;
	return area;
};
console.log(areaOfTriangle(7, 8)); //28

console.log(areaOfTriangle(10, 10)); //50
console.log(areaOfTriangle(-1, 10)); // error
