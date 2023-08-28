'use strict';
console.log('working....');

// task : Compute the new ratings between two or more opponents using the Elo rating system.

/*

Note :  The Elo rating system is a method for calculating the relative skill levels of players in two-player games such as chess and Go. It is named after its creator Arpad Elo, a Hungarian-born American physics professor.

The Elo system was originally invented as an improved chess rating system over the previously used Harkness system, but is also used as a rating system for multiplayer competition in a number of video games, association football, American football, basketball, Major League Baseball, table tennis, board games such as Scrabble and Diplomacy, and other games.

/ Note: Use the exponent ** operator and math operators to compute the expected score (chance of winning). of each opponent and compute the new rating for each. Loop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. Omit the second argument to use the default kFactor of 32.


*/

const elo = ([...ratings], kFactor = 32, selfRating) => {
	const [a, b] = ratings;

	const expectedScore = (self, opponent) =>
		1 / (1 + 10 ** ((opponent - self) / 400));

	const newRating = (rating, i) =>
		(selfRating || rating) +
		kFactor * (i - expectedScore(i ? a : b, i ? b : a));

	if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];

	for (let i = 0, len = ratings.length; i < len; i++) {
		let j = i;
		while (j < len - 1) {
			j++;
			[ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
		}
	}
	return ratings;
};

console.log(elo([1200, 1200])); // [1216, 1184]
console.log(elo([1200, 1200], 64)); // [1232, 1168]

// 4 player FFA, all same rank
console.log(elo([1200, 1200, 1200, 1200]).map(Math.round)); // [1246, 1215, 1185, 1154]

// 4 player FFA, top 3 and last
console.log(elo([1200, 1200, 1200, 800]).map(Math.round)); // [1264, 1235, 1204, 797]

// Task : Write a JavaScript Program t execute a provided function once for each array element, starting from the array's last element.

// Note : Use Array.prototype.reduce() to iterate starting from arr.length - 1. Use the spread operator (...) to call fn with the spread of the array arguments. It should accumulate the value returned by fn for each iteration.

const forEachRight = (arr, callback) =>
	arr.reduceRight((acc, val) => acc.concat(callback(val)), []);

forEachRight([1, 2, 3, 4], (val) => console.log(val)); // '4', '3', '2', '1'

const forEachRight1 = (arr, callback) => arr.slice().reverse().map(callback);

forEachRight1([1, 2, 3, 4], (val) => console.log(val)); // '4', '3', '2', '1'

console.log('another problem ');

// task : Iterate over all own properties of an object, running a callback for each one.

// Note : Use Object.keys(obj) to get all the properties of the object, Array.prototype.forEach() to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

const forOwn = (obj, fn) =>
	Object.keys(obj).forEach((key) => fn(obj[key], key, obj));

forOwn({ foo: 'bar', a: 1 }, (v, k) => console.log(v)); // 'bar', '1'

const forOwn1 = (obj, fn) => {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			fn(obj[key], key, obj);
		}
	}
};

forOwn1({ foo: 'bar', a: 1 }, (v, k) => console.log(v)); // 'bar', '1'
forOwn1({ foo: 'bar', a: 1 }, (v, k) => console.log(k)); // 'foo', 'a'
