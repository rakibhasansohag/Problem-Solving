'use strict ';
console.log('working....');

// task : Find the number of elements which presents in both of the given arrays.

//  point  : solution 1 ( using nested for loop )

console.time(' FindCommonELements1 ');
function findCommonElements(arr1, arr2) {
	let result = 0;

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				result++;
			}
		}
	}
	return result;
}

console.log(findCommonElements([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(findCommonElements([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));

console.timeEnd('FindCommonELements1');

//  point  : solution 2 ( using filter with includes method )

console.time(' FindCommonELements2 ');
function findCommonElements2(arr1, arr2) {
	let result = arr1.filter((item) => arr2.includes(item));
	return result.length;
}

console.log(findCommonElements2([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(findCommonElements2([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));

console.timeEnd('findCommonELements2');

//  point  : solution 3 ( using filter with indexOf method )

console.time(' FindCommonELements3 ');
function findCommonElements3(arr1, arr2) {
	let result = arr1.filter((item) => arr2.indexOf(item) !== -1);
	return result.length;
}

console.log(findCommonElements3([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(findCommonElements3([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));

console.timeEnd('findCommonELements3');

console.log('---------------another problem -----------------');

// task : Simplify a given absolute path for a file in Unix-style.

// todo : 1.1 : ( what is unix Style path ? )
// / unix style path is a path that starts with a forward slash / and does not have a drive letter like c: or d:.

// todo : 1.2 : ( what is absolute path ? )
/// An absolute path is defined as the specifying the location of a file or directory from the root directory(/).

//  point  : solution 1 ( using for loop and array methods (pop,push,join) )

console.time(' simplifyPath1 ');
function simplifyPath(path) {
	let result = [];
	let pathArr = path.split('/');

	for (let i = 0; i < pathArr.length; i++) {
		if (pathArr[i] === '..') {
			result.pop();
		} else if (pathArr[i] !== '.' && pathArr[i] !== '') {
			result.push(pathArr[i]);
		} else {
			continue;
		}
	}
	return '/' + result.join('/');
}

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/a/../../b/../c//.//'));
console.log(simplifyPath('/a//b////c/d//././/..'));

console.log(simplifyPath('/home/var/./www/../html//sql/'));

console.timeEnd('simplifyPath1');

console.log('---------------another problem -----------------');

// task : Sort the strings of a given array of strings in the order of increasing lengths.

//  point  : solution 1 ( using sort method )

function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length);
}

let arra = ['xyz', 'acd', 'aa', 'bb', 'zzz', '', 'a', 'b'];

console.log('original array : ', arra + '\n');
console.log(sortByLength(arra));

// point : solution 2 ( using for loop and array methods (push,sort) )

function sortByLength2(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i].length > arr[j].length) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return [...arr];
}

console.log('original array : ', arra + '\n');
console.log(sortByLength2(arra));

console.log('----------- another problem -----------------');

// task : Break an address of an url and put it's part into an array.

//  point  : solution 1 ( using split method )

function breakAddress(url) {
	const result = url.split('://');
	if (result.length === 1) return 'invalid url';

	const [protocol, address] = result;
	const addressComponents = address.split('/');

	if (addressComponents.length === 1) return 'invalid url';

	const domain = addressComponents[0];
	const pathComponents = addressComponents[1].split('?');
	const path = pathComponents[0];
	const query = pathComponents[1] ? pathComponents[1].spit('&') : [];

	const queryObj = [];

	for (let i = 0; i < query.length; i++) {
		const keyValue = query[i].split('=');
		if (keyValue.length === 2) {
			throw new Error('invalid query parameter formate  ');
		}
		const key = keyValue[0];
		const value = keyValue[1];
		queryObj[key] = value;
	}

	return {
		result,
		protocol,
		domain,
		path,
		queryObj,
	};
}

try {
	console.log(breakAddress('https://www.w3resource.com/javascript-exercises/'));
	console.log(
		breakAddress(
			'https://www.w3resource.com/javascript-exercises/?name=saif&age=23&country=BD',
		),
	);
} catch (error) {
	console.log(`An Error Occured : ${error.message}`);
}

//  point  : solution 2 ( using regex )

function breakAddress2(url) {
	let result = url.match(/(\w+):\/\/([\w.]+)\/(\S*)(?:\?(\S*))?/); // Copied from stackOverflow
	let protocol = result[1];
	let domain = result[2];
	let path = result[3];
	let query = result[4] ? result[4].split('&') : [];
	let queryObj = {};
	for (let i = 0; i < query.length; i++) {
		let key = query[i].split('=')[0];
		let value = query[i].split('=')[1];
		queryObj[key] = value;
	}
	return {
		result,
		protocol,
		domain,
		path,
		queryObj,
	};
}

console.log(breakAddress2('https://www.w3resource.com/javascript-exercises/'));

console.log(
	breakAddress2(
		'https://www.w3resource.com/javascript-exercises/?name=saif&age=23&country=BD',
	),
);

// point : solution3 ( using URL constructor )

function breakAddress3(url) {
	let urlObj = new URL(url);

	let protocol = urlObj.protocol;
	let domain = urlObj.hostname;
	let path = urlObj.pathname;
	let query = urlObj.searchParams;
	let queryObj = {};

	for (let [key, value] of query) {
		queryObj[key] = value;
	}

	return {
		protocol,
		domain,
		path,
		queryObj,
	};
}

console.log(breakAddress3('https://www.w3resource.com/javascript-exercises/'));

console.log(
	breakAddress3(
		'https://www.w3resource.com/javascript-exercises/?name=saif&age=23&country=BD',
	),
);

// point : solution4 ( using split and  w3SChool way )

function breakAddress4(url) {
	let data = url.split('://');
	let protocol = data[0];
	data = data[1].split('.com');
	let domain = data[0];
	data = data[1].split('/');

	if (data[1]) {
		return [protocol, domain, data[1]];
	}

	return [protocol, domain];
}

console.log(breakAddress4('https://www.w3resource.com/javascript-exercises/'));
console.log(
	breakAddress3(
		'https://www.w3resource.com/javascript-exercises/?name=saif&age=23&country=BD',
	),
);
