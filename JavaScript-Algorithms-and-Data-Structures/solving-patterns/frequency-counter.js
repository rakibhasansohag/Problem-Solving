// TODO: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// Solution 1
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else {
		let frequencyCounter1 = {};
		let frequencyCounter2 = {};
		for (let val of arr1) {
			frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
		}
		for (let val of arr2) {
			frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
		}
		for (let key in frequencyCounter1) {
			if (!(key ** 2 in frequencyCounter2)) {
				return false;
			}
			if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
				return false;
			}
		}
		return true;
	}
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9, 4])); // true
console.log(same([1, 2, 3], [1, 4, 4])); // false

console.log('------------------- Solution 2 -------------------');
// Solution 2: ( naive solution)
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else {
		for (let i = 0; i < arr1.length; i++) {
			let correctIndex = arr2.indexOf(arr1[i] ** 2);
			if (correctIndex === -1) return false;

			arr2.splice(correctIndex, 1);
		}
		return true;
	}
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9, 4])); // true
console.log(same([1, 2, 3], [1, 4, 4])); // false


console.log('------------ Angram -----------------');

// TODO :Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// validAnagram(", ") // true
// validAnagram('aaz., 'zza') // false
// validAnagram('anagram., 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom.) // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// Point: Solution 1 : (  )
function validAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let val of str1) {
		// if letter exists, increment, otherwise set to 1
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of str2) {
		// if letter exists, increment, otherwise set to 1
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) return false;
		if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
	}
	return true;
}

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('awesome', 'awesom'));

console.log('------------------- Solution 2 -------------------');
// Point: Solution 2: (  )
function validAnagram(first, second) {
	if (first.length !== second.length) return false;

	let lookup = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];

		lookup[letter] = (lookup[letter] || 0) + 1;
	}

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];

		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}

	return true;
}

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('awesome', 'awesom'));