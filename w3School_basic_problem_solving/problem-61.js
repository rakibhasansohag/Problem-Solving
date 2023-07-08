' use strict';
console.log('working...');

// task : Compute the sum of cubes of all integer from 1 to an given integer .

// point : solution 1 : ( using for loop )

function sumOfCubes(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i * 3;
	}
	return sum;
}

console.log(sumOfCubes(3)); // 36
console.log(sumOfCubes(4)); // 100
console.log(sumOfCubes(5)); // 225

// point : solution 2 : ( using while loop )

function sumOfCubes2(n) {
	let sum = 0;
	let i = 1;

	while (i <= n) {
		sum += Math.pow(i, 3);
		i++;
	}
	return sum;
}

console.log(sumOfCubes2(3)); // 36
console.log(sumOfCubes2(4)); // 100

// point : solution 3 : ( using recursion )

function sumOfCubes3(n) {
	if (n === 1) {
		return 1;
	} else {
		return Math.pow(n, 3) + sumOfCubes3(n - 1);
	}
}

console.log(sumOfCubes3(3)); // 36
console.log(sumOfCubes3(4)); // 100

// point : solution 4 : ( using formula )

function sumOfCubes4(n) {
	return ((n * (n + 1)) / 2) ** 2;
}

console.log(sumOfCubes4(3)); // 36
console.log(sumOfCubes4(4)); // 100

// point : solution 5 : ( using reduce  by for loop  )

function sumOfCubes5(n) {
	let arr = [];

	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr.reduce((a, b) => a + b ** 3, 0);
}

console.log(sumOfCubes5(3)); // 36
console.log(sumOfCubes5(4)); // 100

// point : solution 6 : ( using reduce  by while loop  )

function sumOfCubes6(n) {
	let arr = [];
	let i = 1;

	while (i <= n) {
		arr.push(i);
		i++;
	}

	return arr.reduce((a, b) => a + b ** 3, 0);
}

console.log(sumOfCubes6(3)); // 36
console.log(sumOfCubes6(4)); // 100
