' use strict';
console.log('working...');

// task : Implement the Luhn Algorithm used to validate a variety of identification numbers.

// point 1 : what is the Luhn Algorithm
/// The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, named after its creator, IBM scientist Hans Peter Luhn, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers in the US, and Canadian Social Insurance Numbers. It is described in U.S. Patent No. 2,950,048, filed on January 6, 1954, and granted on August 23, 1960.

// point 2 : how to use the Luhn Algorithm
/// The formula verifies a number against its included check digit, which is usually appended to a partial account number to generate the full account number. This number must pass the following test:

// Point 3: The steps of the algorithm are as follows (for illustration, consider the card number 79927398713):

// Point 4 : ( solution :  )

const luhnAlgorithm = (number) => {
	let arr = number.toString().split('').map(Number);

	for (let i = arr.length - 2; i >= 0; i -= 2) {
		arr[i] *= 2;
		if (arr[i] > 9) {
			arr[i] -= 9;
		}
	}

	let sum = arr.reduce((acc, val) => acc + val, 0);

	return sum % 10 === 0;
};

console.log(luhnAlgorithm(79927398713)); // false
console.log(luhnAlgorithm(79927398714)); // false
console.log(luhnAlgorithm(1234567812345678)); // true
console.log(luhnAlgorithm(123456789)); // false
console.log(luhnAlgorithm('4485275742308327'));
console.log(luhnAlgorithm(6011329933655299));

const luhnAlgorithm2 = (number) => {
	let arr = (number + '')
		.split('')
		.reverse()
		.map((x) => parseInt(x));

	let lastDigit = arr.splice(0, 1)[0];

	let sum = arr.reduce(
		(acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
		0,
	);

	sum += lastDigit;

	return sum % 10 === 0;
};

// console.log(luhnAlgorithm2(79927398713)); // false
// console.log(luhnAlgorithm2(79927398714)); // false
// console.log(luhnAlgorithm2(1234567812345678)); // false
// console.log(luhnAlgorithm2(123456789)); // false
// console.log(luhnAlgorithm2('4485275742308327'));
// console.log(luhnAlgorithm2(6011329933655299));
