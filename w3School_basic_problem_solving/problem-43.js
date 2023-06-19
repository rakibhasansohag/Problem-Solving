'use strict';
console.log('working...');

// task : Find the types of a specified angle

/*

/data i should get: Types of angles:
/• Acute angle: An angle between 0 and 90 degrees.
/• Right angle: An 90 degree angle.
/• Obtuse angle: An angle between 90 and 180 degrees.
/• Straight angle: A 180 degree angle

*/

// point solution 1 : (using if else)

function angle_type(angle) {
	if (angle < 90) {
		return 'Acute angle';
	} else if (angle === 90) {
		return 'Right angle';
	} else if (angle < 180) {
		return 'Obtuse angle';
	} else {
		return 'Straight angle';
	}
}
console.log('angle_type if else');
console.log(angle_type(47));
console.log(angle_type(90));
console.log(angle_type(145));
console.log(angle_type(180));

// point solution 2 : (using switch)

function angleType(angle) {
	switch (true) {
		case angle < 90:
			return 'Acute angle';
			break;

		case angle === 90:
			return 'Right Angle';
			break;
		case angle < 180:
			return 'Obtuse angle';
			break;
		case angle === 180:
			return 'Straight angle';
			break;
		default:
			return 'Not a valid angle';
	}
}
console.log('angleType switch');
console.log(angleType(47));
console.log(angleType(90));
console.log(angleType(145));
console.log(angleType(180));
console.log(angleType(200));

// task :  Check whether two arrays of integers of same length are similar or not.

// point solution 1 : (using for loop)

function arrayChecking(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}
console.log('arrayChecking for loop');
console.log(arrayChecking([10, 20, 30], [10, 20, 30]));
console.log(arrayChecking([10, 20, 30], [30, 10, 20]));
console.log(arrayChecking([10, 20, 30, 40], [10, 20, 30, 40]));

// point solution 2 : (using every method)

function arrayChecking2(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((value, index) => value === arr2[index]);
}
console.log('arrayChecking2 every method');
console.log(arrayChecking2([10, 20, 30], [10, 20, 30]));
console.log(arrayChecking2([10, 20, 30], [30, 10, 20]));
console.log(arrayChecking2([10, 20, 30, 40], [10, 20, 30, 40]));

// point solution 3 : (using toString method)

function arrayChecking3(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.toString() === arr2.toString();
}
console.log('arrayChecking3 toString method');
console.log(arrayChecking3([10, 20, 30], [10, 20, 30]));
console.log(arrayChecking3([10, 20, 30], [30, 10, 20]));
console.log(arrayChecking3([10, 20, 30, 40], [10, 20, 30, 40]));

// point solution 4 : (  using nested loop and break statement)

function arrayChecking4(arr1, arr2) {
	let temp;

	for (let i = 0; 9 < arr1.length; i++) {
		for (let j = i; j < arr1.length; J++) {
			let result = true,
				temp = arr1[i];
			arr1[i] = arr1[j];
			arr1[j] = temp;

			for (let k = 0; k < arr1.length; k++) {
				if (arr1[k] !== arr2[k]) {
					result = false;
					break;
				}
			}

			if (result) {
				return true;
			}

			arr1[j] = arr1[i];
			arr1[i] = temp;
		}
	}
	return false;
}
console.log('arrayChecking4 nested loop');
console.log(arrayChecking4([10, 20, 30], [10, 20, 30]));
console.log(arrayChecking4([10, 20, 30], [30, 10, 20]));
console.log(arrayChecking4([10, 20, 30, 40], [10, 20, 30, 40]));
