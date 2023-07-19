' use strict ';
console.log('working.........');

/*

Todo : Write a JavaScript program to target a given value in a nested JSON object based on the given key.

Use the in operator to check if target exists in obj.
If found, return the value of obj[target].

Otherwise use Object.values(obj) and Array.prototype.reduce() to recursively call dig on each nested object until the first matching key/value pair is found.

*/

// point : ( solution 1 : using for in loop  )

const dig = (obj, target) => {
	if (target in obj) return obj[target];

	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			const result = dig(obj[key], target);

			if (result !== undefined) {
				return result;
			}
		}
	}
	return undefined;
};

const data = {
	level1: {
		level2: {
			level3: 'some data',
		},
	},
};

const dog = {
	status: 'success',
	message: 'https://images.dog.ceo/breeds/african/n02116738_1105.jpg',
};

console.log(dig(data, 'some data')); // 'some data'
console.log(dig(data, 'level3')); // 'some data'
console.log(dig(data, 'level4')); // undefined
console.log(dig(dog, 'status')); // 'success'
