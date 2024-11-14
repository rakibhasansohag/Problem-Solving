// TODO: Suppose we want to write a function that calculates the usm of all numbers from 1 up to ( and including ) some number n.

// Point: solution 1)
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// let t1 = performance.now();
// console.log(addUpTo(10));
// let t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// Point: solution 2)
function addUpTo1(n) {
	return (n * (n + 1)) / 2;
}

// let t3 = performance.now();
// console.log(addUpTo1(10));
// let t4 = performance.now();
// console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);
// console.log(addUpTo1(10));


// Note: Big O

// Point: Problem 1) TODO: countUpAndCountDown
function countUpAndCountDown(n) {
	console.log('Counting up');
	for (let i = 0 ; i< n; i ++) {
		console.log(i);
	}
	console.log("At the top!\nGoing Down...")
	for (let j = n -1; j>= 0 ;j --){
		console.log(j)
	}
	console.log('Back down!')
}

// countUpAndCountDown(10)

// Point: Problem 2) TODO: PrintAllPairs
function printAllPairs(n){
	for (let i = 0 ; i < n; i ++){
		for (let j = 0 ; j < n ; j ++) {
			console.log(i,j)
		}
	}
}

// printAllPairs(10)

// Note O(n)
// Point: Problem 3) TODO: Log at least 5 numbers
function logAtLeast5(n) {
	for (let i = 1 ; i <= Math.max(5,n) ; i ++) {
		console.log(i)
	}
}

// logAtLeast5(10)

// Point: Problem 4) TODO: Log at most 5 numbers
function logAtMost5(n) {
	for (let i = 1; i <= Math.min(5, n) ; i ++){
		console.log(i)
	}
}
// logAtMost5(10)

// Note : Space Complexity

// Point: Problem 5) TODO: Sum Of Array
function sumOfArray(arr) {
	let total = 0 ; 

	for ( let =i = 0 ; i < arr.length ; i ++) {
		total += arr[i]
	}
	return total
}
// sumOfArray([1,2,3,4,5])

// Point: Problem 6) TODO: Double Array
function doubleArray(arr) {
	let newArr = []

	for ( let i = 0 ; i < arr.length  ; i ++  ) {
		newArr.push(2 * arr[i])
	}
	return newArr
}
// doubleArray([1,2,3,4,5])

