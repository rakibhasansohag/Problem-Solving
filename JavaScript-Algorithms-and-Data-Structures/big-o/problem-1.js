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
